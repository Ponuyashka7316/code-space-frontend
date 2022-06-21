import Auth from "../../Auth/Auth";

export default async function handleSubmit(values: any) {
  await Auth.login(values.email, values.password);
}
