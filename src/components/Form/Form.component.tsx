import { JSX } from 'solid-js';

type Props = {
  children: JSX.Element[];
};

const AppForm = ({ children }: Props) => {
  children.map((c) => {
    console.log(c);
  });
  return <form class=''>{children}</form>;
};

export default AppForm;
