import { Link } from 'react-router-dom'
import { FooterContainer, Image, Paragraph } from './footer.styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Link to={'/'}>
        <Image src="/TaskFlow.png" alt="Logo footer"/>
      </Link>
        <Paragraph>Powered by <span style={{fontWeight: 600}}>María Cavallo</span></Paragraph>
        <Paragraph style={{margin: "2px, 5px"}}>&copy; Copyright 2023 </Paragraph>
    </FooterContainer>
  )
}

export default Footer