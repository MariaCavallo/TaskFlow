import styled from 'styled-components'

interface IButtons {
    $primary: boolean
}

export const TodosList = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    padding: 1%;
    gap: 25px;

    @media (max-width: 859px) {
        gap: 15px;
    }
`

export const TodoContainer = styled.div `
    display: flex;
    border-radius: 10px;
    border: 2px solid #275D98;
    height: 4rem;
    width: 30rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #eaf1ff;
    color: black;

    @media (max-width: 859px) {
        width: 100%;
        font-size: 0.9rem;
        height: auto;
    }
`

export const Span = styled.span `
    font-size: large;
    font-weight: 500;
    font-style: oblique;
    padding: 1%;

    @media (max-width: 859px) {
        font-size: 1rem;
        padding: 2%;
    }
`

export const BtnsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 10px;
    padding: 5px;

    @media (max-width: 859px) {
        gap: 5px;
    }
`

export const Buttons = styled.button<IButtons> `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 2.5rem;
    height: 2rem;
    font-size: 17px;
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid ${(props) => (props.$primary ? "green" : "#c23030")};
    color: ${(props) => (props.$primary ? 'green' : '#c23030')};
    &:hover{
        cursor: pointer;
        background-color: ${(props) => (props.$primary ? "green" : "#c23030")};
        color: white;
    }

    @media (max-width: 859px) {
        font-size: 1rem;
        width: 2rem;
        height: 1.5rem;
    }
`

export const ButtonClear = styled.button `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;
    background-color: white;
    border-radius: 5px;
    border: 2px solid #c23030;
    color: #c23030;
    margin: 1%;
    &:hover{
        cursor: pointer;
        background-color: #c23030;
        color: white;
    }
    &:disabled{
        cursor: default;
        border: 1px solid #000;
        background-color: lightgray;
        color: #000;
        margin: 0% 0% 10% 0%;
    }

    @media (max-width: 859px) {
        width: 6rem;
        font-size: 1rem;
    }
`