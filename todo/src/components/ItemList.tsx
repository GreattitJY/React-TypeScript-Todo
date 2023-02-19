import React from "react";
import { Props } from "../interface/interface";
import { Item } from "../types/type";

const ItemList = ({ items, setItems }: Props) => {
  const handleDelete = (data: Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const handleComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
    console.log(data);
  };

  return (
    <ul>
      {items.map((data: Item) => {
        return (
          <li key={data.itemId}>
            <p>{data.itemName}</p>
            <div>
              <button onClick={() => handleDelete(data)}>삭제</button>
              <button onClick={() => handleComplete(data)}>완료</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
