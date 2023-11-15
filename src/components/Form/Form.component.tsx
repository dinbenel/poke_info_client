import { JSX } from 'solid-js';
import FormContextProvider from './context/Form.context';

type Props = {
  children: JSX.Element;
};

const AppForm = ({ children }: Props) => {
  console.log('first');
  console.log(children);
  return <FormContextProvider>{children}</FormContextProvider>;
};

export default AppForm;
