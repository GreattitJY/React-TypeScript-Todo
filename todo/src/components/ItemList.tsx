import React from "react";
import { Props } from "../interface/interface";
import { List, TodoText, ListWrap } from "../styles/ItemList.style";
import { Item } from "../types/type";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearItem } from "../modules/itemReducer";
import { RootState } from "../modules";

const ItemList = () => {
  const todo = useSelector((state: RootState) => state.itemReducer.todo);
  const dispatch = useDispatch();

  const handleDelete = (data: Item) => {
    dispatch(deleteItem(data.itemId));
  };

  const handleComplete = (data: Item) => {
    dispatch(clearItem(data.itemId));
  };

  return (
    <ListWrap>
      {todo.map((data: Item) => {
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
