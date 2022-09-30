
import logo from '../assets/images/logo.png'
import styled from 'styled-components'


const Container = styled.div`
  background: white;
  height: 59px;
  padding: 0 1.2em;
  display: flex;
  align-items: center;
  
  @media (min-width: 650px) {
    height: 83px;
    padding: 0 3rem;
  }
`

const Logo = styled.img`
  width: 23px;
  aspect-ratio: 1;
  
  @media (min-width: 650px) {
    width: 34px;
  }
`

const BrandName = styled.p`
  font-family: var(--ff-brand);
  font-size: var(--fs-14);
  font-weight: 700;
  color: #0E0E0E;
  margin-left: .5em;
  margin-right: auto;
  
  @media (min-width: 650px) {
    font-size: var(--fs-20);
  }
`

const Nav = styled.div`
`

const NavItem = styled.a`
  font-size: var(--fs-12);
  font-weight: 400;
  color: #090909;
  text-transform: uppercase;
  text-decoration: none;
  margin-left: 2em;
  
  @media (min-width: 650px) {
    font-size: var(--fs-16);
  }
`

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <BrandName>My learning journal</BrandName>
      <Nav> 
        <NavItem href="/">home</NavItem>
        <NavItem href="/home">about me</NavItem>
      </Nav>
    </Container>
  )
}

export default Header;
