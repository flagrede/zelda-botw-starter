import React from "react";
import BonusBox from "./BonusBox";
import { ItemsBonusType } from "../data/items.type";

type Props = {
  fire: number;
  swimming: number;
  climbing: number;
};

const BonusList: React.FC<Props> = ({ fire, climbing, swimming }) => (
  <>
    {fire > 0 && <BonusBox bonusType={ItemsBonusType.FIRE} value={fire} />}
    {climbing > 0 && (
      <BonusBox bonusType={ItemsBonusType.CLIMBING} value={climbing} />
    )}
    {swimming > 0 && (
      <BonusBox bonusType={ItemsBonusType.SWIMMING} value={swimming} />
    )}
  </>
);

export default BonusList;
