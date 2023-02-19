import React, { useRef, useState } from "react";
import { Props } from "../interface/interface";

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
      <input type="text" value={itemName} onChange={handleItmeName} ref={inputRef} />
      <button onClick={handleClickButton}>생성</button>
    </>
  );
};

export default AddItem;
