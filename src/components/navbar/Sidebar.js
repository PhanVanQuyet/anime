import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

const SidebarContainer = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 999;
  display: none;
  opacity: ${({isOpent}) => (isOpent ? '100%' : '0')};
  top: ${({isOpent}) => (isOpent ? '0' : '-100%')};
  transition: 0.2s ease-out;
  @media screen and (max-width: 960px) {
    display: block;
  }
`

const MobileIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CloneIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  transform: translate(-100%, 60%);
`

const SidebarMenu = styled.div`
  margin-top: 6rem;
`

const SidebarItem = styled.div`
    padding: 2rem 0;
`

const SidebarLink = styled(LinkS)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: green;
    transition: 0.2s ease-in-out;
  }
`

const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const SidebarBtnLink = styled(LinkR)`
  background-color: green;
  padding: 12px 40px;
  border-radius: 40px;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #e0e0e0;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`

const Sidebar = ({isOpent, handleClick}) => {
    return (
        <SidebarContainer isOpent={isOpent} onClick={handleClick}>
            <MobileIcon onClick={handleClick}>
                <CloneIcon />
            </MobileIcon>
            <SidebarMenu>
                <SidebarItem>
                    <SidebarLink
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={handleClick}>Home</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink
                        to='service'
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={handleClick}>Service</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={handleClick}>About</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink
                        to='contactus'
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={handleClick}>Contactus</SidebarLink>
                </SidebarItem>
                <SidebarBtn>
                    <SidebarBtnLink to='/signup'>Sign up</SidebarBtnLink>
                </SidebarBtn>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar