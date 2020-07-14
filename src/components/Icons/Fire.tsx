import * as React from "react";

type Props = {
  className: string;
};

const FireIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={24}
      height={27}
      viewBox="0 0 24 27"
      fill="none"
      className={className}
    >
      <path
        d="M.5 15C.5 8.649 13.5.5 13.5.5s-2.834 6.295-2.5 11c.182 2.569.82 4 2.5 4 1.68 0 1.976-1.751 2.5-4 .515-2.21 0-4.5 0-4.5s7.022 4.786 7.5 8c.934 6.282-5.149 11.5-11.5 11.5S.5 21.351.5 15z"
        fill="#FC3D33"
      />
    </svg>
  );
};

export default FireIcon;
