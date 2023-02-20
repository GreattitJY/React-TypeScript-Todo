import styled from "styled-components";
import { ListProps } from "../interface/interface";

export const ListWrap = styled.ul`
  max-height: 450px;
  overflow-y: auto;
`;

export const List = styled.li<ListProps>`
  display: flex;
  margin: 0px 10px 20px 0;
  border: 1px solid ${(props) => (props.clear ? "#ccc" : "#fff")};
  border-radius: 10px;
  color: ${(props) => (props.clear ? "#ccc" : "#fff")};
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  text-decoration-line: ${(props) => (props.clear ? "line-through" : "")};

  :first-child {
    margin: 0 10px 20px 0;
  }

  :last-child {
    margin: 0 10px 0 0;
  }

  button {
    color: ${(props) => (props.clear ? "#ccc" : "#fff")};
    border: none;
    margin: 0 5px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.color["green-100"]};
    }
  }
`;

export const TodoText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
`;
