import styled from 'styled-components'

export const TodosPage = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 32vw;

    @media (max-width: 859px) {
        min-height: 60vh;
        padding: 20px;
    }
`