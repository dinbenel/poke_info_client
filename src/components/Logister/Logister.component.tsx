import { JSX, children } from 'solid-js';
import { AppForm, Input } from '..';
import { useForm } from '@/hooks/useForm';
import { LoginFormData } from '@/types/logister.type';

type Props = {
  children?: JSX.Element;
};

const Logister = (props: Props) => {
  const childrenSignals = children(() => props.children);

  const { onchange, register, onSubmit } = useForm<LoginFormData>({
    email: '',
    password: '',
  });

  const submitHandler = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AppForm>
      <Input onInput={onchange} {...register('password')} />
      <Input onInput={onchange} {...register('email')} />
      {childrenSignals()}
      <button type='submit' onClick={onSubmit(submitHandler)}>
        submit
      </button>
    </AppForm>
  );
};

export default Logister;
