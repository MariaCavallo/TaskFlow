import styled from "styled-components";

export const FooterContainer = styled.div `
    display: flex;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    background-color: #275D98;
    color: white;
    top: auto;
    width: 100%;

    @media (max-width: 859px) {
        flex-direction: column;
        top: 6rem;
    }
`

export const Image = styled.img `
    height: 20%;
    width: 20%;
    margin: 5px;

    @media (max-width: 859px) {
        display: none;
    }
`

export const Paragraph = styled.p `
    margin: 0% 8% 0% 0%;

    @media (max-width: 859px) {
        margin: 2% 8%;
        text-align: center;
    }
`