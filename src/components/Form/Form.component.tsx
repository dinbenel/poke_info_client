import { JSX, children } from "solid-js";

type Props = {
  children: JSX.Element;
};

const AppForm = (props: Props) => {
  const childrenSignal = children(() => props.children);
  return (
    <div class="w-full flex items-center justify-center mt-4">
      <form class="bg-slate-100/80 rounded-md p-4 space-y-4 w-1/4">
        {childrenSignal()}
      </form>
    </div>
  );
};

export default AppForm;
