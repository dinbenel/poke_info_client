import { JSX } from 'solid-js';
import { formContextProvider } from './context/Form.context';

type Props = {
  children: JSX.Element;
};

const AppForm = ({ children }: Props) => {
  console.log('first');
  console.log(children);
  const { provider, useFormContext } = formContextProvider<{ name: string }>({
    children,
    defaultValues: { name: 'fff' },
  });
  return provider;
};

export default AppForm;
