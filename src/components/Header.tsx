
import { Link } from 'react-router-dom'
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
  text-decoration: none;
  font-size: var(--fs-14);
  font-weight: 700;
  color: #0E0E0E;
  margin-left: .5em;
  
  @media (min-width: 650px) {
    font-size: var(--fs-20);
  }
`

const Nav = styled.div`
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
`

const NavItem = styled.li`
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: var(--fs-12);
  font-weight: 400;
  color: #090909;
  text-transform: uppercase;
  margin-left: 2em;
  
  @media (min-width: 650px) {
    font-size: var(--fs-16);
  }
  `
  
const BrandLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: auto;
`

function Header() {
  return (
    <Container>
      <BrandLink to="/">
        <Logo src={logo} alt="logo" />
        <BrandName>My learning journal</BrandName>
      </BrandLink>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to='/'>home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about-me'>about me</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  )
}

export default Header;
