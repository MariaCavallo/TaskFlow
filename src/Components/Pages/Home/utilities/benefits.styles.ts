import styled from 'styled-components';

export const BenefitsContainer = styled.div `
    margin: 2%;
    height: auto;
    width: auto;
    border: 2px solid #0E4A8C;
    border-radius: 10px;

    @media (max-width: 859px) {
        margin: 2% 1%;
    }
`

export const TitleBenefits = styled.h2 `
    margin: 1%;
    color: #0076D1;

    @media (max-width: 859px) {
        font-size: 1.5rem;
    }
`

export const ListContainer = styled.ul `
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

export const Lists = styled.li `
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin: 0% 9px;

    @media (max-width: 859px) {
        margin: 0% 0.5rem;
    }
`

export const Span = styled.span `
    color: #0076D1;
    font-weight: 600;
    text-decoration: underline;

    @media (max-width: 859px) {
        font-size: 0.9rem;
    }
`