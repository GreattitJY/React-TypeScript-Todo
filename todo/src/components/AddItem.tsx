import React, { useRef, useState } from "react";
import { Props } from "../interface/interface";
import { CreateBtn, InputTodo } from "../styles/AddItem.style";

const AddItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleItmeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  const handleClickButton = () => {
    if (inputRef.current?.value === "") {
      return;
    }
    setItems([...items, { itemId: crypto.randomUUID(), itemName, clear: false }]);
    setItemName("");
  };

  return (
    <>
      <InputTodo type="text" value={itemName} onChange={handleItmeName} ref={inputRef} />
      <CreateBtn onClick={handleClickButton}>생성</CreateBtn>
    </>
  );
};

export default AddItem;
