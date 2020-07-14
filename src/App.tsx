import React, { useEffect, useRef, useState } from "react";
import linkImage from "./assets/bg.png";
import ItemInformation from "./components/ItemInformation";
import ItemsGrid from "./components/ItemsGrid";
import ItemsContext from "./context/ItemsContext";
import getItems, { emptyItem } from "./utils/getItems";
import {
  getIndexFromMaxtrixPosition,
  getMatrixPositionFromIndex,
  goDown,
  goLeft,
  goRight,
  goUp,
  COLUMNS_NUMBER,
} from "./utils/keyboardNavigation";
import CategoriesMenu from "./components/CategoriesMenu";
import NavigationArrow from "./components/NavigationArrow";
import { NavigationArrowVariant } from "./components/NavigationArrow";
import navigateToDirection from "./utils/navigateToDirection";

function App() {
  const [itemsPaginated, setItemsPaginated] = useState(getItems());
  const [[page, direction], setPage] = useState([0, 0]);
  const [itemSelected, setItemSelected] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [itemsEquipped, setItemsEquipped] = useState({});
  const inventoryRef = useRef<HTMLDivElement>(null);
  const items = itemsPaginated[page].items;
  const isSelectedItemNotEmpty = items[itemSelected].name !== "";

  const closeModal = () => {
    setIsModalOpened(false);
    if (inventoryRef.current) {
      inventoryRef.current.focus();
    }
  };

  const equipItem = () => {
    const itemSelectedData = items[itemSelected];
    setItemsEquipped({
      ...itemsEquipped,
      [itemSelectedData.category]: itemSelectedData,
    });
  };

  const dropItem = () => {
    const newItemsPaginated = [...itemsPaginated];
    newItemsPaginated[page].items.splice(itemSelected, 1);
    newItemsPaginated[page].items.push(emptyItem);
    setItemsPaginated(newItemsPaginated);
  };

  const contextState = {
    setItemSelected,
    itemSelected,
    isModalOpened,
    setIsModalOpened,
    closeModal,
    equipItem,
    dropItem,
    itemsEquipped,
  };

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    let newItemSelected = null;
    const positionItemSelected = getMatrixPositionFromIndex(itemSelected);

    switch (event.key) {
      case "ArrowUp":
        newItemSelected = goUp(positionItemSelected);
        break;
      case "ArrowDown":
        newItemSelected = newItemSelected = goDown(positionItemSelected);
        break;
      case "ArrowLeft":
        if (positionItemSelected.y === 0) {
          navigateToDirection(-1, page, setPage);
        }
        newItemSelected = goLeft(positionItemSelected);
        break;
      case "ArrowRight":
        if (positionItemSelected.y === COLUMNS_NUMBER - 1) {
          navigateToDirection(1, page, setPage);
        }
        newItemSelected = goRight(positionItemSelected);
        break;
      case "Enter":
        if (isSelectedItemNotEmpty) {
          setIsModalOpened(!isModalOpened);
        }
        break;
      default:
        break;
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
      className="bg-zelda-darkGreen min-h-screen pt-10 font-calamity outline-none"
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
              <ItemsGrid direction={direction} page={page} items={items} />
            </div>
          </ItemsContext.Provider>
          <NavigationArrow
            currentPage={page}
            setPage={setPage}
            variant={NavigationArrowVariant.LEFT}
          />
          <NavigationArrow
            currentPage={page}
            setPage={setPage}
            variant={NavigationArrowVariant.RIGHT}
          />
        </div>
        <div className="flex flex-col items-center self-end xl:items-start w-full xl:w-1/2 my-6 xl:my-0">
          <img
            className="absolute hidden xl:block top-0 ml-48 z-0"
            src={linkImage}
            alt="link"
          />
          {isSelectedItemNotEmpty && (
            <ItemInformation
              item={items[itemSelected]}
              itemsEquipped={itemsEquipped}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
