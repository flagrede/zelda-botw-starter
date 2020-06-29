import React from "react";
import Item from "./Item";
import { ItemType } from "../data/items.type";

type Props = {
  items: ItemType[];
};

const ItemsGrid: React.FC<Props> = ({ items }) => (
  <div className="mx-auto grid grid-cols-3 md:grid-cols-5 gap-6">
    {items.map((item, index) => (
      <Item
        key={`${item.name}-${index}`}
        name={item.name}
        icon={item.icon}
        value={item.value}
        itemIndex={index}
      />
    ))}
  </div>
);

export default ItemsGrid;
