import React from "react";
import { ItemsBonusType } from "../data/items.type";
import Fire from "./Icons/Fire";
import Mountain from "./Icons/Mountain";
import Water from "./Icons/Water";
import cx from "classnames";

type Props = {
  bonusType: ItemsBonusType;
  className?: string;
};

const BonusIcon: React.FC<Props> = ({ bonusType, className }) => (
  <div className={cx(className)}>
    {bonusType === ItemsBonusType.FIRE && <Fire className="w-5 h-5 mx-1" />}
    {bonusType === ItemsBonusType.SWIMMING && (
      <Water className="w-5 h-5 mx-1" />
    )}
    {bonusType === ItemsBonusType.CLIMBING && (
      <Mountain className="w-5 h-5 mx-1" />
    )}
  </div>
);

export default BonusIcon;
