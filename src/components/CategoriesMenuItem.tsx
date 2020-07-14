import cx from "classnames";
import React, { useContext } from "react";
import SoundContext from "../context/SoundContext";

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
}) => {
  const { playAction } = useContext(SoundContext);

  return (
    <div
      onClick={() => {
        setPage([page, 0]);
        playAction();
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
};

export default CategoriesMenuItem;
