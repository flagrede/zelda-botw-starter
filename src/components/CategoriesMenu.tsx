import React from "react";
import { ItemsMainCategoriesType } from "../data/items.type";
import CategoriesMenuItem from "./CategoriesMenuItem";
import Armor from "./Icons/Armor";
import Shield from "./Icons/Shield";
import Sword from "./Icons/Sword";

type Props = {
  categorySelected: ItemsMainCategoriesType;
  setPage: React.Dispatch<React.SetStateAction<[number, number]>>;
};

const CategoriesMenu: React.FC<Props> = ({ categorySelected, setPage }) => {
  return (
    <div className="flex mx-auto mb-6 z-20">
      <CategoriesMenuItem
        page={0}
        setPage={setPage}
        isSelected={categorySelected === ItemsMainCategoriesType.WEAPONS}
      >
        <Sword className="fill-current h-10 w-16 pb-3 px-4" />
      </CategoriesMenuItem>
      <CategoriesMenuItem
        page={1}
        setPage={setPage}
        isSelected={categorySelected === ItemsMainCategoriesType.SHIELDS}
      >
        <Shield className="fill-current h-10 w-16 pb-3 px-4" />
      </CategoriesMenuItem>
      <CategoriesMenuItem
        page={2}
        setPage={setPage}
        isSelected={categorySelected === ItemsMainCategoriesType.ARMORS}
      >
        <Armor className="fill-current h-10 w-16 pb-3 px-4" />
      </CategoriesMenuItem>
    </div>
  );
};

export default CategoriesMenu;
