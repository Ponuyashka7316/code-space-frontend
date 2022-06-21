export interface LoginResponce {
  Token: string;
  RefreshToken: string;
  Expiration: string;
  Roles: string[];
  User: string;
}
