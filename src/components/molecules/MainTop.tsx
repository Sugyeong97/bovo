import { ReactNode } from "react";

interface MainTopProps {
  contents?: ReactNode;
}

export default function MainTop({ contents = "" }: MainTopProps) {
  return (
    <section className="pb-3 w-full text-center">
        {contents}
      TODAY <span className="text-point-color">230613</span> | TOTAL <span className="text-point-color">19971031</span>
    </section>
  );
}
