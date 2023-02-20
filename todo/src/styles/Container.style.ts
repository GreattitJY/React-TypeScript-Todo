import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color["green-300"]};
  min-width: 450px;
  min-height: 650px;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 3px 6px 40px #000;
  margin-bottom: 10px;
`;
