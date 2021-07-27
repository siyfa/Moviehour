import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  padding: 20px;
  color: var(--darkGrey);
  margin: 0 auto;

  p {
    color: var(--darkGrey);

    a {
      text-decoration: none;
    }
  }

  input {
    width: 100%;
    heigth: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
    outline: none;
  }

  .error {
    color: red;
  }
`;
