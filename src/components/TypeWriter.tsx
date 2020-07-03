import React from "react";
import { useWindupString } from "windups";

type Props = {
  text: string;
};

const TypeWriter: React.FC<Props> = ({ text }) => {
  const [itemSelectedDescription] = useWindupString(text || "", {
    pace: () => 5,
  });

  return <>{itemSelectedDescription}</>;
};

export default TypeWriter;
