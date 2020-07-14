import * as React from "react";

type Props = {
  className: string;
};

const WaterIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={36}
      height={35}
      viewBox="0 0 36 35"
      fill="none"
      className={className}
    >
      <path
        d="M10 .11c-5.416 1.084-10 10-10 10s6.191-.863 10 0c7.199 1.633 7.696 9.958 15 8.89 7.886-1.153 10.5-14.89 10.5-14.89s-5.795 5.592-10.5 6c-7.014.61-8.096-11.38-15-10z"
        fill="#A3F5FB"
      />
      <path
        d="M10 15.11c-5.416 1.084-10 10-10 10s6.191-.863 10 0c7.199 1.633 7.696 9.958 15 8.89 7.886-1.153 10.5-14.89 10.5-14.89s-5.795 5.592-10.5 6c-7.014.61-8.096-11.38-15-10z"
        fill="#A3F5FB"
      />
    </svg>
  );
};

export default WaterIcon;
