import React, { useEffect, useRef, useState } from "react";
import { Props } from "../interface/interface";
import { CreateBtn, InputTodo } from "../styles/AddItem.style";
import { addItem } from "../modules/itemReducer";
import { useDispatch } from "react-redux";

const AddItem = () => {
  const [itemName, setItemName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleItmeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current?.value === "") {
      return;
    }

    const itemData = {
      id: crypto.randomUUID(),
      name: itemName,
      clear: false,
    };

    dispatch(addItem(itemData.id, itemData.name, itemData.clear));

    setItemName("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <>
      <form>
        <fieldset>
          <InputTodo type="text" value={itemName} onChange={handleItmeName} ref={inputRef} />
          <CreateBtn onClick={handleClickButton}>생성</CreateBtn>
        </fieldset>
      </form>
    </>
  );
};

export default AddItem;
