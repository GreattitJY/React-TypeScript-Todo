import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { Item } from "./types/type";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  return (
    <div>
      <div>
        <div>
          <h1>Todo List</h1>
        </div>
        <AddItem {...{ items }} {...{ setItems }} />
        <ItemList {...{ items }} {...{ setItems }} />
      </div>
    </div>
  );
}

export default App;
