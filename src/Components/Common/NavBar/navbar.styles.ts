import styled from "styled-components";

export const Navbar = styled.div `
    display: flex;
    flex-wrap: wrap;
    background-color: #275D98;
    width: 100%;
    color: white;
    align-items: center;
    align-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    margin: 10px;

    @media (max-width: 768px) {
        margin: 20px 0;
    }
`

export const Title = styled.h1 `
    font-family: 'Rubik Iso', cursive;
    font-size: 2.5rem;
    margin: 0% 6%;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin: 10px;
    }
`

export const Image = styled.img `
    height: 5em;
    width: 5em;

    @media (max-width: 768px) {
        height: 3em; 
        width: 3em;
    }
`
