import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  //timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
