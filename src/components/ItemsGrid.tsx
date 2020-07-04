import React from "react";
import Item from "./Item";
import { ItemType } from "../data/items.type";
import { motion } from "framer-motion";

type Props = {
  items: ItemType[];
  page: number;
  direction: number;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction * 100,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
};

const ItemsGrid: React.FC<Props> = ({ items, page, direction }) => (
  <motion.div
    key={page}
    className="mx-auto grid grid-cols-3 md:grid-cols-5 gap-6"
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    transition={{
      x: { type: "tween" },
      opacity: { duration: 0.2 },
    }}
  >
    {items.map((item, index) => (
      <Item
        key={`${item.name}-${index}`}
        name={item.name}
        icon={item.icon}
        value={item.value}
        itemIndex={index}
      />
    ))}
  </motion.div>
);

export default ItemsGrid;
