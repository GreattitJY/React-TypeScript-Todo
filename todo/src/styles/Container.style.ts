import styled from "styled-components";

export const Container = styled.div`
  /* background: linear-gradient(to bottom right, #0cdbc9, #70bdf0); */
  background: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.color["green-100"]}, ${theme.color["green-200"]})`};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
