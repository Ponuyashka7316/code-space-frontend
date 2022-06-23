import Auth from "../../Auth/Auth";

export default async function handleSubmit(values: any) {
  return await Auth.login(values.email, values.password);
}
