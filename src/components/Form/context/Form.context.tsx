import { Context, JSX, createContext } from 'solid-js';
import { createStore } from 'solid-js/store';

type Props = {
  children: JSX.Element;
};

type TFormContextProvider = (props: Props) => JSX.Element;
export type TFormContext<T> = Context<T>;

export const FormContext = createContext();

export const formContextProvider: TFormContextProvider = ({ children }) => {
  const [values, setValues] = createStore({});
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};
