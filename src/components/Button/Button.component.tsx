import { JSX } from "solid-js";

type Props = {
  title: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, ...props }: Props) => {
  return (
    <button class="" {...props}>
      {title}
    </button>
  );
};

export default Button;
