import { JSX } from "solid-js";

type Props = {
  f?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: Props) => {
  return (
    <div class="flex flex-col gap-2">
      <label for={props.id}>{props.name}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
