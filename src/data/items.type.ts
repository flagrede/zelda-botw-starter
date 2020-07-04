export enum ItemsMainCategoriesType {
  WEAPONS = "weapons",
  SHIELDS = "shields",
  ARMORS = "armors",
}

export enum ItemCategoriesType {
  WEAPON = "weapon",
  SHIELD = "shield",
  ARMOR = "armor",
  GREAVE = "greave",
  HELM = "helm",
}

export type ItemType = {
  name: string;
  category: ItemCategoriesType;
  icon: string;
  value: string;
  description: string;
  bonus?: string;
  isNew?: boolean;
};

export type ItemsPage = {
  items: ItemType[];
  mainCategory: ItemsMainCategoriesType;
  page: number;
};

export type ItemsType = {
  [key: string]: ItemType[];
};
