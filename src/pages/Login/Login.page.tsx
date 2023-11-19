import { AppForm, Input } from "@/components";
import { useForm } from "@/hooks/useForm";
import { LoginFormData } from "@/types/logister.type";

const Login = () => {
  const { onSubmit, onchange, register } = useForm<LoginFormData>({
    email: "",
    password: "",
  });

  const submitHandler = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AppForm>
      <>
        <Input onInput={onchange} {...register("email")} />
        <Input onInput={onchange} {...register("password")} />
        <button type="submit" onClick={onSubmit(submitHandler)}>
          submit
        </button>
      </>
    </AppForm>
  );
};

export default Login;
