import styled from 'styled-components'

export const TodoFormContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 1%;
`

export const Title = styled.h1 `
    color: #0076D1;
    font-size: 2.5rem;
    text-align: center;
    padding: 2% 0% 10% 0%;
`

export const From = styled.form `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`

export const Label = styled.label `
    font-size: larger;
`

export const BtnInpContainer = styled.div `
    display: flex;
    align-items: baseline;
    margin: 2% -11% 0% 0%;
    gap: 5px;
`

export const Input = styled.input `
    height: 3rem;
    width: 15rem;
    background-color: white;
    color: black;
    border: 2px solid #0E4A8C;
    border-radius: 10px;
    margin: 0% 0% 7%;
    font-size: 1rem;
    padding: 3%;
    &:hover {
        background-color: #9fb7d1;
    }
`

export const Button = styled.button `
    font-size: 20px;
    height: 2rem;
    width: 2rem;
    border: 2px solid white;
    border-radius: 5px;
    background-color: #0E4A8C;
    color: white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        transform: scale(1.08);
    }
`