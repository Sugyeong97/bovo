import { ReactNode } from "react";

interface MainTopProps {
  elementContent?: ReactNode;
}

export default function MainTop({ elementContent = "" }: MainTopProps) {
  return (
    <section className="pb-3 w-full text-center">
      {elementContent}
    </section>
  );
}
