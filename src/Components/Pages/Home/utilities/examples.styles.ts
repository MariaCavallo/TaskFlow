import styled from 'styled-components';

export const ExamplesContainer = styled.div `
    margin: 2%;
    height: auto;
    width: auto;
    border: 2px solid #0E4A8C;
    border-radius: 10px;

    @media (max-width: 859px) {
        margin: 2% 1%;
    }
`

export const TitleExamples = styled.h2 `
    margin: 1%;
    color: #0076D1;

    @media (max-width: 859px) {
        font-size: 1.5rem;
    }
`

export const Section = styled.section `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 1% 0%;
    align-items: center;
    padding: 1%;

    @media (max-width: 859px) {
        flex-direction: column;
    }
`

export const Card = styled.div `
    margin: 0% 6px;
    border: 2px solid #193f95;
    border-radius: 10px;
    background-color: #c2d6ff;
    padding: 10px;
    font-style: italic;
    color: #000;

    @media (max-width: 859px) {
        margin: 1% 0;
        font-size: 0.9rem;
    }
`
