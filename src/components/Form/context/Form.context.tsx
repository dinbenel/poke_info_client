import { JSX, createContext, useContext } from 'solid-js';

type Props<T> = {
  children: JSX.Element;
  defaultValues: T;
};

type TFormContextProvider = <T>({}: Props<T>) => {
  provider: JSX.Element;
  useFormContext: any;
};

export const formContextProvider: TFormContextProvider = ({
  children,
  defaultValues,
}) => {
  const FormContext = createContext(defaultValues);
  const useFormContext = () => useContext(FormContext);

  const provider = (
    <FormContext.Provider value={defaultValues}>
      {children}
    </FormContext.Provider>
  );
  return {
    useFormContext,
    provider,
  };
};
