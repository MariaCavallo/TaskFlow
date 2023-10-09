import styled from "styled-components";

export interface ThemeProps {
    $isDark: boolean;
}

export const ToggleButtonContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1%;
`

export const ToggleButton = styled.button<ThemeProps>`
    background-color: ${(props) => props.$isDark ? '#ffffff' : '#275D98'};
    color: ${(props) => (props.$isDark ? '#275D98' : '#ffffff')};
    padding: 8px 16px;
    border-radius: 10px;
    border: 2px solid ${(props) => (props.$isDark ? '#275D98' : '#ffffff')};
    font-size: 18px;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;
