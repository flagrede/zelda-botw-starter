import React from "react";
import cx from "classnames";
import CategoryIcon from "./CategoryIcon";
import { ItemType } from "../data/items.type";

type Props = {
  item: ItemType;
};

const ItemInformation: React.FC<Props> = ({ item }) => (
  <div
    className={cx(
      "relative w-full max-w-xs md:max-w-lg z-10",
      "text-white text-sm py-4 px-6 md:mx-4",
      "bg-zelda-bgBlackTransparent border border-zelda-darkGray"
    )}
  >
    <div className="text-lg font-bold mb-2 pb-2 border-zelda-darkGray border-b">
      {item.name}
    </div>
    <div className="min-h-24">
      <div className="overflow-hidden leading-5">
        <div className="flex items-center mb-2">
          <CategoryIcon type={item.category} />
          <div className="text-lg py-2 px-3 border border-zelda-lightGray">
            {item.value}
          </div>
        </div>
        <div>{item.description}</div>
      </div>
    </div>
  </div>
);

export default ItemInformation;
