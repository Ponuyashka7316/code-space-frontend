import { ResponseType } from "./../../../common/types/ResponseType";
import { http } from "../../../utils/axiosInstance";

export async function getCourses() {
  try {
    console.log(http);
    const { data } = await http.get<ResponseType>(`/GetCourses`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
  return [];
}
