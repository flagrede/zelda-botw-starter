type ItemType = {
  name: string;
  category: string;
  icon: string;
  value: string;
  description: string;
  bonus?: string;
  isNew?: boolean;
};

type ItemsType = {
  [key: string]: ItemType[];
};

export default ItemsType;
