import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  padding: 0 20px;
`;
export const Director = styled.div`
  padding: 0;
  margin: 0;
  .section {
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    tet-align: center;
    overflow: hidden;

    h3 {
      margin: 10px 0 0 10px;
    }
    p {
      margin: 5px 10px;
    }
  }
`;
export const Actor = styled.div``;
export const Actors = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  tet-align: center;
  overflow: hidden;

  h3 {
    margin: 10px 0 0 10px;
  }

  p {
    margin: 5px 10px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
