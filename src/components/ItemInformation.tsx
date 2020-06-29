import React from "react";
import cx from "classnames";

const ItemInformation = () => (
  <div
    className={cx(
      "relative w-full max-w-xs md:max-w-lg z-10",
      "text-white text-sm py-4 px-6 md:mx-4",
      "bg-zelda-bgBlackTransparent border border-zelda-darkGray"
    )}
  ></div>
);

export default ItemInformation;
