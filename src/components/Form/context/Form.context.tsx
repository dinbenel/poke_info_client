import { JSX, createContext } from 'solid-js';
import { createStore } from 'solid-js/store';

const FormContext = createContext();

type Props = {
  children: JSX.Element;
};

const FormContextProvider = ({ children }: Props) => {
  const [] = createStore();
  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
