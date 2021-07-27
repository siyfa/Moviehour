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
    height: 81vh;
    position: relative;
    animation: animatedHeroImage 1s;
    position: relative;
    
    @keyframes animatedHeroImage{
        from {
            opacity: 0;
        }
        to{
            opacity{
                1;
            }
        }
    }
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
  height: 81vh;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 70%;
  position: absolute;
  bottom: 100px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: 5em;

    @media screen and (max-width: 720px) {
      font-size: 3em;
    }
    @media screen and (max-width: 350px) {
      font-size: 2em;
    }
  }

  p {
    font-size: var(--fontBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }

  @media screen and (max-width: 720) {
    max-width: 100%;
  }
`;
