import React, { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { Container } from "./styles/Container.style";
import { HeadOne } from "./styles/HeadOne.stlye";
import { Wrapper } from "./styles/Wrapper.style";
import { Item } from "./types/type";

function App() {
  return (
    <Wrapper>
      <Container>
        <HeadOne>Todo List</HeadOne>
        <AddItem />
        <ItemList />
      </Container>
    </Wrapper>
  );
}

export default App;
