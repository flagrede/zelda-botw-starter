import { Dispatch, SetStateAction } from "react";

const navigateToDirection = (
  newDirection: number,
  currentPage: number,
  setPage: React.Dispatch<React.SetStateAction<[number, number]>>,
  maxPage = 2
) => {
  setPage([
    Math.min(Math.max(currentPage + newDirection, 0), maxPage),
    newDirection,
  ]);
};

export default navigateToDirection;
