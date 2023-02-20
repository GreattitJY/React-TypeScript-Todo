import styled from "styled-components";

export const HeadOne = styled.h1`
  color: #fff;
  text-align: center;
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: bold;
`;
