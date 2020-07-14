import * as React from "react";

type Props = {
  className: string;
};

const SvgComponent: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      className={className}
    >
      <path d="M26.5 0s1.462 13.647 7.157 19.343C39.353 25.038 53 26.5 53 26.5s-13.647 1.462-19.343 7.157C27.962 39.353 26.5 53 26.5 53s-1.462-13.647-7.157-19.343C13.647 27.962 0 26.5 0 26.5s13.647-1.462 19.343-7.157C25.038 13.647 26.5 0 26.5 0z" />
    </svg>
  );
};

export default SvgComponent;
