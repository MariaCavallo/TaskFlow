import { Link } from 'react-router-dom'
import { Navbar, LogoContainer, Image, Title } from './navbar.styles';

export const NavBar = () => {

    return (
        <Navbar>
            <LogoContainer>
                <Link to={'/home'}>
                    <Image src="/TaskFlow.png" alt="Logo" />
                </Link>
                <Link to={'/home'} style={{ textDecoration: "none", color: "white" }}>
                    <Title>TaskFlow</Title>
                </Link>
            </LogoContainer>
        </Navbar>
    )
}
