import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    padding: 20px;
    height: 89vh;
    position: relative;
    animation: zoom 5s linear infinite;
    position: relative;
    overflow: hidden;

    
    @keyframes zoom {
        0% {
        transform: scale(1.3);
        }
        15% {
        transform: scale(1);
        }
        85% {
        transform: scale(1);
        }
        100% {
        transform: scale(1.3);
        }
    },
    
`;

export const Content = styled.div`
  padding: 20px;
  // max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  background: rgba(48, 47, 54, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 89vh;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 100%;
  position: absolute;
  text-align: center;
  left: 20%;
  color: var(--white);
  @media screen and (max-width: 768px) {
    left: 20px;
    top: 50px;
    max-width: 90%;
  }
  @media screen and (max-width: 500px) {
    left: 20px;
    top: 50px;
    max-width: 90%;
  }
  @media screen and (max-width: 350px) {
    left: 20px;
    top: 0;
  }

  h1 {
    font-size: 5em;
    font-weight: bold;

    @media screen and (max-width: 500px) {
      font-size: 3em;
    }
  }

  p {
    font-size: var(--fontBig);

    @media screen and (max-width: 500px) {
      font-size: var(--fontMed);
    }
  }
`;
