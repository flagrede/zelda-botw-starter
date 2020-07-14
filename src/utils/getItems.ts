import items from "../data/items";
import { ItemCategoriesType, ItemsPage } from "../data/items.type";
import { ItemsMainCategoriesType } from "./../data/items.type";

export const emptyItem = {
  name: "",
  icon: "",
  value: "",
  description: "",
  category: ItemCategoriesType.WEAPON,
};

const getItems = (itemsPerPage = 20): ItemsPage[] => {
  const itemsGrid = [];
  for (let itemsCategory in items) {
    const mainItemsCategory = itemsCategory as ItemsMainCategoriesType;
    const newPage = items[mainItemsCategory].concat(
      new Array(itemsPerPage - items[mainItemsCategory].length).fill(emptyItem)
    );
    itemsGrid.push({
      items: newPage,
      mainCategory: mainItemsCategory,
      page: 0,
    });
  }

  return itemsGrid;
};

export default getItems;
