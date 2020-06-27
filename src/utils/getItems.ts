import items from "../data/items";
import {
  ItemType,
  ItemsMainCategoriesType,
  ItemCategoriesType,
} from "../data/items.type";

const emptyItem = {
  name: "",
  icon: "",
  value: "",
  description: "",
  category: ItemCategoriesType.WEAPON,
};

const getItems = (
  category = ItemsMainCategoriesType.WEAPONS,
  itemsPerPage = 20
): ItemType[] => {
  const itemsGrid = items[category].concat(
    new Array(itemsPerPage - items[category].length).fill(emptyItem)
  );

  return itemsGrid;
};

export default getItems;
