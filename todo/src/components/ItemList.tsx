import React from "react";
import { Props } from "../interface/interface";
import { List, TodoText, ListWrap } from "../styles/ItemList.style";
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
    <ListWrap>
      {items.map((data: Item) => {
        return (
          <List key={data.itemId} clear={data.clear}>
            <TodoText>{data.itemName}</TodoText>
            <div>
              <button onClick={() => handleDelete(data)}>삭제</button>
              <button onClick={() => handleComplete(data)}>{data.clear ? "취소" : "완료"}</button>
            </div>
          </List>
        );
      })}
    </ListWrap>
  );
};

export default ItemList;
