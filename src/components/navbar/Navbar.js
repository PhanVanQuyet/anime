import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {Button} from "../Button";
import {useState, useEffect } from "react";
import {animateScroll as scroll} from 'react-scroll'

const Nav = styled.div`
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 40px;
  z-index: 10;
  background-color: ${({scroll}) => (scroll ? '#000' : 'rgba(0, 0, 0, 0.1)')};
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
`

const NavLogo = styled(LinkR)`
  color: #fff;
  font-weight: bold;
  height: 100%;
  text-decoration: none;
  align-items: center;
  font-size: 1.2rem;
  align-items: center;
  display: flex;
  cursor: pointer;
`

const MobileIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  }
`

const Icon = styled(FaBars)`
  color: #fff;
  font-size: 1.8rem;
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

const NavItem = styled.li`
    height: 100%;
  display: flex;
  align-items: center;
  
`

const NavLink = styled(LinkS)`
  color: #e3e3e3;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #00d700;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

const Navbar = ({handleClick}) => {

    const [scrolls, setScrolls] = useState(false)

    const changeNav = () => {
        if (window.scrollY > 80) {
            setScrolls(true)
        } else {
            setScrolls(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const clickHome = () => {
        scroll.scrollToTop()
    }

    return (
        <Nav scroll={scrolls}>
            <NavbarContainer>
                <NavLogo onClick={clickHome}>Dolli</NavLogo>
                <MobileIcon onClick={handleClick}>
                    <Icon />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                        >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to='service'
                            smooth={true}
                            dration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                        >Service</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to='about'
                            smooth={true}
                            dration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                        >about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to='contactus'
                            smooth={true}
                            dration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                        >Contact Us</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <Button to='/signup'>Sign up</Button>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar