import { axiosInstance } from "../../../utils/axiosInstance";
import { LoginResponce as TokenInfo } from "./LoginResponce";
// import { instanceOfTokenResponse } from "./TypeGuard";
class Auth {
  private readonly url = "/login";
  private readonly data = {
    //RequestObj: recordId,
    MethodName: "AcquireB2CToken",
  };
  private static expiresAt: number = 0;

  public async login(login: string, password: string) {
    try {
      let { data } = await axiosInstance.post<TokenInfo>(
        `${process.env.NEXT_PUBLIC_API_URL}${this.url}`,
        {
          username: login,
          password: password,
        }
      );
      localStorage.setItem("token", JSON.stringify(data));
      Auth.expiresAt = new Date(data.Expiration).getTime() / 1000;
      return data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  public async register<RegisterType>(info: RegisterType) {
    try {
      const { username, email, password }: any = info;
      let { data } = await axiosInstance.post<RegisterType>(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          username: username,
          mail: email,
          password: password,
        }
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public acquireToken() {
    const token = localStorage.getItem("token");
    if (token) {
      const { Expiration } = JSON.parse(token) as TokenInfo;
      if (Auth.expiresAt >= new Date().getTime() / 1000) {
        //refresh token
        this.refreshToken();
      } else {
        return token;
      }
      return null;
    }
  }

  private async refreshToken() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { Expiration, RefreshToken, Token } = JSON.parse(
          token
        ) as TokenInfo;
        const { data } = await axiosInstance.post<TokenInfo>("/refresh-token", {
          accessToken: Token,
          refreshToken: RefreshToken,
          refreshTokenExpiryTime: Expiration,
        });
        localStorage.setItem("token", JSON.stringify(data));
        Auth.expiresAt = new Date(data.Expiration).getTime() / 1000;
      } catch (e) {
        console.log(e);
      }
    }
  }

  //   private async acquireToken(): Promise<TokenResponse | { error: string }> {
  //     try {
  //       let response = await fetch(this.url, {
  //         method: "POST",
  //         cache: "no-cache",
  //         headers: {
  //           "Content-Type": "application/json; charset=utf-8",
  //           "OData-MaxVersion": "4.0",
  //           "OData-Version": "4.0",
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify(this.data),
  //       });
  //       let responseContent = await response.json();
  //       let tokenResponse = responseContent.ResponseObj;
  //       let tokenDataObj: TokenResponse = JSON.parse(tokenResponse);
  //       console.log(tokenDataObj);
  //       localStorage.setItem("b2ctoken", JSON.stringify(tokenDataObj));
  //       Auth.expiresAt = this.setExpirationDate(tokenDataObj);
  //       return tokenDataObj;
  //     } catch (e) {
  //       console.log(e);
  //       return {
  //         error: "impossible to fetch token. Please contact your administrator",
  //       };
  //     }
  //   }

  //   public async acquireTokenSilent() {
  //     const token = localStorage.getItem("b2ctoken");
  //     if (token) {
  //       let tokenDataObj: TokenResponse = JSON.parse(token);
  //       const isTokenExpired = this.isTokenExpired(tokenDataObj);
  //       console.log(isTokenExpired, "expires_in");
  //       if (isTokenExpired) {
  //         return this.acquireNewToken();
  //       } else {
  //         return tokenDataObj.access_token;
  //       }
  //     } else {
  //       console.log("expires_in");
  //       return this.acquireNewToken();
  //     }
  //   }

  //   public isTokenExpired(tokenDataObj: TokenResponse) {
  //     console.log("isTokenExpired", Auth.expiresAt);

  //     const now = new Date().getTime();
  //     const expiresAt = Auth.expiresAt;
  //     return now > expiresAt;
  //   }

  //   private async acquireNewToken() {
  //     const newToken = await this.acquireToken();
  //     if (instanceOfTokenResponse(newToken)) {
  //       return newToken.access_token;
  //     } else {
  //       return newToken;
  //     }
  //   }

  //   private setExpirationDate(tokenDataObj: TokenResponse) {
  //     const now = new Date().getTime();
  //     const expiresIn = tokenDataObj.expires_in;
  //     const expiresAt = now + expiresIn * 1000;
  //     return expiresAt;
  //   }
}

export default new Auth();
