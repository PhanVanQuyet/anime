import styled from "styled-components";
import {AiFillYoutube, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai'

const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 2rem 0;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
`

const Columns = styled.div`
   
`

const Menu = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
`

const Item = styled.div`
  color: #fff;
  padding: 4px 0;
`

const FooterEnd = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
`

const FooterRight = styled.div``
const FooterLeft = styled.div``
const IconAiFillYoutube = styled(AiFillYoutube)`
  font-size: 2rem;
  margin: 0 0.5rem;
`

const IconAiFillTwitterCircle = styled(AiFillTwitterCircle)`
  font-size: 2rem;
  margin: 0 0.5rem;
`

const IconAiFillFacebook = styled(AiFillFacebook)`
  font-size: 2rem;
  margin: 0 0.5rem;
`

const Footer = () => {
    return (
        <>
            <Background>
                <Container>
                    <Wrapper>
                        <Columns>
                            <Menu>About</Menu>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                        </Columns>
                        <Columns>
                            <Menu>About</Menu>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                        </Columns>
                    </Wrapper>
                    <Wrapper>
                        <Columns>
                            <Menu>About</Menu>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                        </Columns>
                        <Columns>
                            <Menu>About</Menu>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                            <Item>Web Technologies</Item>
                        </Columns>
                    </Wrapper>
                </Container>
            </Background>
            <FooterEnd>
                <FooterRight>@COPYRIGHT2020</FooterRight>
                <FooterLeft>
                    <IconAiFillYoutube />
                    <IconAiFillTwitterCircle />
                    <IconAiFillFacebook />
                </FooterLeft>
            </FooterEnd>
        </>
    )
}

export default Footer