import React from "react";
import Shield from "./Icons/Shield";
import Sword from "./Icons/Sword";
import Armor from "./Icons/Armor";
import { ItemCategoriesType } from "../data/items.type";

const categoryMapping = {
  [ItemCategoriesType.SHIELD]: Shield,
  [ItemCategoriesType.WEAPON]: Sword,
  [ItemCategoriesType.ARMOR]: Armor,
  [ItemCategoriesType.GREAVE]: Armor,
  [ItemCategoriesType.HELM]: Armor,
};

type Props = {
  type: ItemCategoriesType;
};

const CategoryIcon: React.FC<Props> = ({ type }) => {
  const CategoryIcon = categoryMapping[type];

  return <CategoryIcon className="fill-current w-12 px-4 text-white" />;
};

export default CategoryIcon;
