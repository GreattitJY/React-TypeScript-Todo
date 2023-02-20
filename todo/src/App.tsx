import React, { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { Container } from "./styles/Container.style";
import { HeadOne } from "./styles/HeadOne.stlye";
import { Wrapper } from "./styles/Wrapper.style";
import { Item } from "./types/type";

function App() {
  const saveItem = localStorage["todos"] ? JSON.parse(localStorage.getItem("todos") || "") : [];
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <Wrapper>
      <Container>
        <HeadOne>Todo List</HeadOne>
        <AddItem {...{ items }} {...{ setItems }} />
        <ItemList {...{ items }} {...{ setItems }} />
      </Container>
    </Wrapper>
  );
}

export default App;
