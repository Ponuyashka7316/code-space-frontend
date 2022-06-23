import ResponseError from "./Error.type";

export function isError(arg: any): arg is ResponseError {
  return arg.error !== undefined && arg.error !== null;
}
