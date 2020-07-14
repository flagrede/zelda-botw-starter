import React from "react";
import BonusIcon from "./BonusIcon";
import { ItemsBonusType } from "../data/items.type";

type Props = {
  bonusType: ItemsBonusType;
  value: number;
};

const BonusBox: React.FC<Props> = ({ bonusType, value }) => {
  const activeBonus = new Array(value).fill("");
  const inactiveBonus = new Array(3 - value).fill("");
  return (
    <div className="w-10 h-10 mr-2 md:mr-2 md:mb-2">
      <BonusIcon bonusType={bonusType} />
      <div className="flex mt-1">
        {activeBonus.map((_, index) => (
          <div key={index} className="w-1/3 h-1 mr-1 bg-zelda-blue" />
        ))}
        {inactiveBonus.map((_, index) => (
          <div key={index} className="w-1/3 h-1 mr-1 bg-zelda-darkGray" />
        ))}
      </div>
    </div>
  );
};

export default BonusBox;
