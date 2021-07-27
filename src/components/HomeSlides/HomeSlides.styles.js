import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px auto;
  position: relative;

  h1 {
    color: var(--darkGrey);
    margin-top: 0;
    margin-left: 20px;
    padding-top: 30px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  img {
    width: 420px;
    padding: 0 7px;

    @media screen and (max-width: 500px) {
      width: 300px;
    }
    @media screen and (max-width: 300px) {
      width: 250px;
    }
  }
`;

export const Left = styled.div`
  position: absolute;
  top: 200px;
  left: 70px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    display: none;
  }

  button {
    border: none;
    background: white;
    padding: 5px;
    border-radius: 50%;
    opacity: 0.4;

    :hover {
      opacity: 1;
    }
  }
`;
export const Right = styled.div`
  position: absolute;
  top: 200px;
  right: 70px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    display: none;
  }

  button {
    border: none;
    background: white;
    padding: 5px;
    border-radius: 50%;
    opacity: 0.4;

    :hover {
      opacity: 1;
    }
  }
`;
