import React, { useState, useEffect, useRef } from "react";
import ItemsGrid from "./components/ItemsGrid";
import getItems from "./utils/getItems";
import ItemsContext from "./context/ItemsContext";
import {
  goUp,
  goLeft,
  goRight,
  getMatrixPositionFromIndex,
  goDown,
  getIndexFromMaxtrixPosition,
} from "./utils/keyboardNavigation";

function App() {
  const [itemSelected, setItemSelected] = useState(0);
  const contextState = {
    setItemSelected,
    itemSelected,
  };
  const inventoryRef = useRef<HTMLDivElement>(null);

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    let newItemSelected = null;
    const positionItemSelected = getMatrixPositionFromIndex(itemSelected);
    if (event.key === "ArrowUp") {
      newItemSelected = goUp(positionItemSelected);
    } else if (event.key === "ArrowDown") {
      newItemSelected = newItemSelected = goDown(positionItemSelected);
    } else if (event.key === "ArrowLeft") {
      newItemSelected = goLeft(positionItemSelected);
    } else if (event.key === "ArrowRight") {
      newItemSelected = goRight(positionItemSelected);
    }
    if (newItemSelected) {
      setItemSelected(getIndexFromMaxtrixPosition(newItemSelected));
    }
  };

  useEffect(() => {
    if (inventoryRef.current) {
      inventoryRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={inventoryRef}
      onKeyDown={handleKeyPressed}
      className="bg-zelda-darkGreen min-h-screen pt-32"
      tabIndex={0}
    >
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2">
          <ItemsContext.Provider value={contextState}>
            <ItemsGrid items={getItems()} />
          </ItemsContext.Provider>
        </div>
        <div className="w-full xl:w-1/2"></div>
      </div>
    </div>
  );
}

export default App;
