import { createStore } from 'solid-js/store';

type ChangeEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

type SubmitEvent = MouseEvent & {
  currentTarget: HTMLButtonElement;
  target: Element;
};

export const useForm = <T extends object>(values: T) => {
  const [formData, setFormData] = createStore(values);

  const register = (name: keyof typeof formData) => {
    return {
      name,
      value: formData[name],
    };
  };

  const onchange = ({ currentTarget }: ChangeEvent) => {
    const name = currentTarget.name;
    const value = currentTarget.value;

    const vals = {
      [name]: value,
    } as typeof formData;

    setFormData({ ...vals });
  };

  const onSubmit = (cb: (data: typeof formData) => void) => {
    return (e: SubmitEvent) => {
      e.preventDefault();
      cb(formData);
    };
  };

  return {
    onchange,
    register,
    formData,
    onSubmit,
  };
};
