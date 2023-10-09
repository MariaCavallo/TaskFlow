import styled from 'styled-components'

export const TodosContainerAll = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
`

export const SubTitle = styled.h3 `
    font-size: 1.6rem;
    color: #0076D1;
    margin: 3% 0% 5% 0%;
    width: 15rem;

    @media (max-width: 859px) {
        font-size: 1.2rem; 
        margin: 2% 0% 3% 0%;
    }
`

export const PendingAndCompletedTodosContainer = styled.div `
    margin: 1%;
`