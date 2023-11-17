import { FormContext } from '@/components/Form/context/Form.context';
import { useContext } from 'solid-js';

export const useFormContext = () => {
  const data = useContext(FormContext);
};
