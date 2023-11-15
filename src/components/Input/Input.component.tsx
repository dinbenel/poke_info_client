import { JSX } from 'solid-js';

type Props = {} & JSX.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: Props) => {
  return (
    <div class='flex flex-col '>
      <label for={props.id}>{props.name}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
