import React from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { ToggleButton, ToggleButtonContainer } from './darkMode.styles'

interface DarkModeToggleProps {
    isDarkMode: boolean;
    onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onToggle, isDarkMode }) => {

    return (
        <ToggleButtonContainer>
            <ToggleButton $isDark={isDarkMode} onClick={onToggle}>
                {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
            </ToggleButton>
        </ToggleButtonContainer>
    )
}

export default DarkModeToggle