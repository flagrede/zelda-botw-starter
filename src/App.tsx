import React, { useState, useEffect, useRef } from "react";
import ItemsGrid from "./components/ItemsGrid";
import ItemInformation from "./components/ItemInformation";
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
import linkImage from "./assets/bg.png";

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
        <div className="flex flex-col justify-center w-full max-w-2xl mx-auto xl:w-1/2 relative xl:px-12">
          <ItemsContext.Provider value={contextState}>
            <div className="flex">
              <ItemsGrid items={getItems()} />
            </div>
          </ItemsContext.Provider>
        </div>
        <div className="flex flex-col items-center self-end xl:items-start w-full xl:w-1/2 my-6 xl:my-0">
          <img
            className="absolute hidden xl:block top-0 ml-48 z-0"
            src={linkImage}
            alt="link"
          />
          <ItemInformation />
        </div>
      </div>
    </div>
  );
}

export default App;
