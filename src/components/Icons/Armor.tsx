import * as React from "react";

type Props = {
  className: string;
};

const SvgComponent: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={36}
      height={34}
      viewBox="0 0 36 34"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 9.5L6 15l3.5-3.5L6 34h24l-3.5-22.5L30 15l5.5-5.5-9-9s-3.858 7.276-8 7c-3.857-.257-7-7-7-7l-11 9zM19 13a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
  );
};

export default SvgComponent;
