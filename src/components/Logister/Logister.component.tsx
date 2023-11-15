import { JSX } from 'solid-js';
import { AppForm } from '..';

type Props = {
  children?: JSX.Element;
};
const Logister = ({ children }: Props) => {
  return (
    <AppForm>
      <form>
        <label for='name'>NAME</label>
        <input placeholder='NAME' id='name' />
        {children}
      </form>
    </AppForm>
  );
};

export default Logister;
