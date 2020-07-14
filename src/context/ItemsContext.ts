import { createContext } from "react";
import { ItemType } from "../data/items.type";

type ContextProps = {
  setItemSelected: React.Dispatch<React.SetStateAction<number>>;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemSelected: number;
  isModalOpened: boolean;
  closeModal: () => void;
  equipItem: () => void;
  dropItem: () => void;
  itemsEquipped: { [key: string]: ItemType };
};

const ItemsContext = createContext<Partial<ContextProps>>({});

export default ItemsContext;
