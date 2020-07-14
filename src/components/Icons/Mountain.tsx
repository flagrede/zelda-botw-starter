import * as React from "react";

type Props = {
  className: string;
};

const MountainIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={32}
      height={24}
      viewBox="0 0 32 24"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24L10 .5l6.5 10 3-5L32 24H0zm9-14l1.5-3 2 3H9zm9.5 3.5L20 11l1.5 2.5h-3z"
        fill="#89C610"
      />
    </svg>
  );
};

export default MountainIcon;
