import { AppForm, Input } from "@/components";
import { useForm } from "@/hooks/useForm";
import { RegisterFormData } from "@/types/logister.type";

const Register = () => {
  const { onSubmit, onchange, register } = useForm<RegisterFormData>({
    email: "",
    password: "",
    userName: "",
  });

  const submitHandler = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <AppForm>
      <>
        <Input onInput={onchange} {...register("email")} />
        <Input onInput={onchange} {...register("password")} />
        <Input onInput={onchange} {...register("userName")} />
        <button
          class="w-full bg-red-400"
          type="submit"
          onClick={onSubmit(submitHandler)}
        >
          submit
        </button>
      </>
    </AppForm>
  );
};

export default Register;
