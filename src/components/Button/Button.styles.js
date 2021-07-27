import styled from "styled-components";

export const Wrapper = styled.div`
    disply: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    padding: 10px 0;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3;
    outline: none:
    cursor: pointer;
    text-align: center;

    :hover {
        opacity: 0.8;
    }
`;
