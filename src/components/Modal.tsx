import React, { useState, useRef, useEffect, useContext } from "react";
import cx from "classnames";
import TrianglesBox from "./TrianglesBox";
import useClickOutside from "../utils/hooks/useClickOutside";
import ItemsContext from "../context/ItemsContext";
import SoundContext from "../context/SoundContext";

enum ModalOptions {
  EQUIP = 0,
  DROP = 1,
  CANCEL = 2,
}

export default () => {
  const { closeModal, equipItem, dropItem } = useContext(ItemsContext);
  const [selectedOption, setSelectedOption] = useState(ModalOptions.EQUIP);
  const modalRef = useRef<HTMLDivElement>(null);
  const { playSelect } = useContext(SoundContext);

  useClickOutside(modalRef, closeModal);

  const equipAndClose = () => {
    if (closeModal && equipItem) {
      equipItem();
      closeModal();
    }
  };

  const dropAndClose = () => {
    if (closeModal && dropItem) {
      dropItem();
      closeModal();
    }
  };

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "ArrowUp") {
      setSelectedOption(Math.max(selectedOption - 1, 0));
      playSelect();
    } else if (event.key === "ArrowDown") {
      setSelectedOption(Math.min(selectedOption + 1, 2));
      playSelect();
    } else if (event.key === "Enter") {
      switch (selectedOption) {
        case ModalOptions.EQUIP:
          equipAndClose();
          break;
        case ModalOptions.DROP:
          dropAndClose();
          break;
        default:
          closeModal && closeModal();
          break;
      }
      closeModal && closeModal();
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={modalRef}
      onKeyDown={handleKeyPressed}
      tabIndex={0}
      className="border border-zelda-darkGray w-32 bg-zelda-bgModal absolute top-0 left-0 z-50 mx-6 my-6 outline-none text-white"
    >
      <div
        className="flex flex-col p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border-2":
                selectedOption === ModalOptions.EQUIP,
            },
            "flex justify-center px-6 py-2 relative border border-zelda-darkGray mb-4"
          )}
          onClick={equipAndClose}
        >
          {selectedOption === ModalOptions.EQUIP && <TrianglesBox />}
          Equip
        </div>
        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border-2":
                selectedOption === ModalOptions.DROP,
            },
            "flex justify-center px-6 py-2 relative border border-zelda-darkGray mb-4"
          )}
          onClick={dropAndClose}
        >
          {selectedOption === ModalOptions.DROP && <TrianglesBox />}
          Drop
        </div>
        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border-2":
                selectedOption === ModalOptions.CANCEL,
            },
            "flex justify-center px-6 py-2 relative border border-zelda-darkGray"
          )}
          onClick={closeModal}
        >
          {selectedOption === ModalOptions.CANCEL && <TrianglesBox />}
          Cancel
        </div>
      </div>
    </div>
  );
};
