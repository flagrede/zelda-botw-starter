import * as React from "react";

type Props = {
  className: string;
};

const SvgComponent: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={44}
      height={46}
      viewBox="0 0 44 46"
      fill="none"
      className={className}
    >
      <path d="M16.5 35L6 45.5l-6-6 10-10-8-8 4-4L26.5 38 23 41.5 16.5 35zM33.5 2l-20 20 4 3 9-9 2.5 2.5-9.5 9.5 2.5 3.5L43.5 10V0l-10 2z" />
    </svg>
  );
};

export default SvgComponent;
