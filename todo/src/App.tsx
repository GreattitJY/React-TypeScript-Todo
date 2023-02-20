import React, { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { Container } from "./styles/Container.style";
import { Item } from "./types/type";

function App() {
  const saveItem = localStorage["todos"] ? JSON.parse(localStorage.getItem("todos") || "") : [];
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <Container>
      <div>
        <div>
          <h1>Todo List</h1>
        </div>
        <AddItem {...{ items }} {...{ setItems }} />
        <ItemList {...{ items }} {...{ setItems }} />
      </div>
    </Container>
  );
}

export default App;
