import cx from "classnames";
import React from "react";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<[number, number]>>;
  isSelected: boolean;
};

const CategoriesMenuItem: React.FC<Props> = ({
  page,
  setPage,
  isSelected,
  children,
}) => (
  <div
    onClick={() => {
      setPage([page, 0]);
    }}
    className={cx(
      {
        "text-white border-white": isSelected,
        "text-zelda-lightGray border-zelda-lightGray": !isSelected,
      },
      "border-b cursor-pointer"
    )}
  >
    {children}
  </div>
);

export default CategoriesMenuItem;
