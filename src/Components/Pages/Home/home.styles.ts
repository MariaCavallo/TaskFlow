import styled from 'styled-components';

export const Description = styled.p `
    margin: 3% 1%;
    font-size: large;
    text-align: center;
`

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 3%;
`

export const Button = styled.button `
    font-size: x-large;
    height: 4rem;
    border: 2px solid #0E4A8C;
    border-radius: 10px;
    background-color: white;
    color: #0E4A8C;
    &:hover{
        background-color: #0E4A8C;
        color: white;
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;
    }
`