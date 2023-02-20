import { Item } from "../types/type";

export interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export interface ListProps {
  clear: boolean;
}
