import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 0 50px 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: var(--darkGrey);
  color: var(--white);
`;

export const Button = styled.button`
  width: 50%;
  font-size: 20px;
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.7;
  background: #eb520f;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
  border-bottom: 2px solid black;
  opacity: 1;
`}
`;

export const Text = styled.div``;
