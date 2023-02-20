import styled from "styled-components";

export const InputTodo = styled.input`
  width: 320px;
  padding: 15px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;
`;

export const CreateBtn = styled.button`
  padding: 13px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  margin-left: 15px;
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: #fff;
    transition: 0.3s;
    color: ${({ theme }) => theme.color["green-300"]};
  }
`;
