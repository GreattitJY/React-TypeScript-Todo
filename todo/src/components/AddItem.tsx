import React, { useEffect, useRef, useState } from "react";
import { Props } from "../interface/interface";
import { CreateBtn, InputTodo } from "../styles/AddItem.style";

const AddItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleItmeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current?.value === "") {
      return;
    }
    setItems([{ itemId: crypto.randomUUID(), itemName, clear: false }, ...items]);
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
