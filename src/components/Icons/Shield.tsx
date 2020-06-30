import * as React from "react";

type Props = {
  className: string;
};

const SvgComponent: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={27}
      height={34}
      viewBox="0 0 27 34"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v20.5c3.11 5.937 6.132 8.875 13.5 13.5 6.478-4.658 9.42-7.622 13.5-13.5V0H0zm13 29.5c5.096-3.715 7.331-6.038 10.5-10.5V3H3v17c2.965 4.417 5.569 6.477 10 9.5z"
      />
      <path d="M5 19.5V5h16v14.5c-2.685 3.563-4.424 5.327-8 8-3.572-2.496-5.308-4.268-8-8z" />
    </svg>
  );
};

export default SvgComponent;
