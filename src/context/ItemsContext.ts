import { createContext } from "react";

type ContextProps = {
  setItemSelected: React.Dispatch<React.SetStateAction<number>>;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemSelected: number;
  isModalOpened: boolean;
  closeModal: () => void;
};

const ItemsContext = createContext<Partial<ContextProps>>({});

export default ItemsContext;
