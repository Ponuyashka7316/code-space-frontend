import { ResponseType } from "./../../../common/types/ResponseType";
import { axiosInstance } from "../../../utils/axiosInstance";

export async function getCourses() {
  try {
    console.log(axiosInstance);
    const { data } = await axiosInstance.get<ResponseType>(`/GetCourses`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
  return [];
}
