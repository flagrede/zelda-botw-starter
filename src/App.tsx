import React, { useEffect, useRef, useState } from "react";
import linkImage from "./assets/bg.png";
import ItemInformation from "./components/ItemInformation";
import ItemsGrid from "./components/ItemsGrid";
import ItemsContext from "./context/ItemsContext";
import getItems from "./utils/getItems";
import {
  getIndexFromMaxtrixPosition,
  getMatrixPositionFromIndex,
  goDown,
  goLeft,
  goRight,
  goUp,
} from "./utils/keyboardNavigation";
import CategoriesMenu from "./components/CategoriesMenu";

function App() {
  const [itemsPaginated, setItemsPaginated] = useState(getItems());
  const [page, setPage] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);
  const contextState = {
    setItemSelected,
    itemSelected,
  };
  const inventoryRef = useRef<HTMLDivElement>(null);
  const items = itemsPaginated[page].items;

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
      className="bg-zelda-darkGreen min-h-screen pt-10 font-calamity"
      tabIndex={0}
    >
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="flex flex-col justify-center w-full max-w-2xl mx-auto xl:w-1/2 relative xl:px-12">
          <CategoriesMenu
            categorySelected={itemsPaginated[page].mainCategory}
            setPage={setPage}
          />
          <ItemsContext.Provider value={contextState}>
            <div className="flex">
              <ItemsGrid items={items} />
            </div>
          </ItemsContext.Provider>
        </div>
        <div className="flex flex-col items-center self-end xl:items-start w-full xl:w-1/2 my-6 xl:my-0">
          <img
            className="absolute hidden xl:block top-0 ml-48 z-0"
            src={linkImage}
            alt="link"
          />
          {items[itemSelected].name && (
            <ItemInformation item={items[itemSelected]} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
