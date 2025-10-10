import { ReactNode } from "react";

interface MainBottomProps {
  bottomElement?: ReactNode;
}

export default function MainBottom({ bottomElement = "" }: MainBottomProps) {
  return (
    <section className="w-full h-full p-7 border border-light-gray rounded-xl shadow-3xl bg-white flex flex-col items-start">
      {bottomElement}
    </section>
  );
}
