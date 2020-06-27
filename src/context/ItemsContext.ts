import { createContext } from "react";

type ContextProps = {
  setItemSelected: React.Dispatch<React.SetStateAction<number>>;
  itemSelected: number;
};

const ItemsContext = createContext<Partial<ContextProps>>({});

export default ItemsContext;
