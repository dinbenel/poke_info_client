import { JSX } from 'solid-js';
import { AppForm, Input } from '..';
import { useForm } from '@/hooks/useForm';
import { LoginFormData } from '@/types/logister.type';

type Props = {
  children?: JSX.Element;
};

const Logister = ({ children }: Props) => {
  const { formData, onchange, register, onSubmit } = useForm<LoginFormData>({
    email: '',
    password: '',
  });

  const submitHandler = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AppForm>
      <form class='' onSubmit={(e) => onSubmit(e, submitHandler)}>
        <Input onInput={onchange} {...register('password')} />
        <Input onInput={onchange} {...register('email')} />
        {children}
        <button>submit</button>
      </form>
    </AppForm>
  );
};

export default Logister;
