import cx from "classnames";
import React from "react";
import TypeWriter from "../components/TypeWriter";
import { ItemType } from "../data/items.type";
import CategoryIcon from "./CategoryIcon";

type Props = {
  item: ItemType;
  itemsEquipped: { [key: string]: ItemType };
};

const ItemInformation: React.FC<Props> = ({ item, itemsEquipped }) => (
  <div
    className={cx(
      "relative w-full max-w-xs md:max-w-lg z-10",
      "text-white text-sm py-4 px-6 md:mx-4",
      "bg-zelda-bgBlackTransparent border border-zelda-darkGray"
    )}
  >
    {itemsEquipped[item.category] === item && (
      <div className="absolute left-0 top-0 bottom-0 m-2 w-1 bg-zelda-blue" />
    )}
    <div className="text-lg font-bold mb-2 pb-2 border-zelda-darkGray border-b">
      {item.name}
    </div>
    <div className="min-h-32">
      <div className="overflow-hidden leading-5">
        <div className="flex items-center mb-2">
          <CategoryIcon type={item.category} />
          <div className="text-lg py-2 px-3 border border-zelda-lightGray">
            {item.value}
          </div>
        </div>
        <div>
          <TypeWriter text={item.description} />
        </div>
      </div>
    </div>
  </div>
);

export default ItemInformation;
