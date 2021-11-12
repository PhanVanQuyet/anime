import styled from "styled-components";
import {Button} from "../Button";

const Content = styled.div`
  height: 760px;
  margin-top: 40px;
`

const Background = styled.div`
  height: 100%;
  background-color: ${({Bgc}) => (Bgc ? '#000' : '#f6f6f6')};
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  align-items: center;
  width: 100%;
  
  @media screen and (max-width: 960px) {
    display: block;
    padding: 1rem 2rem;
  }
`

const Heading = styled.div``

const Title = styled.div`
  color: ${({color}) => (color ? '#fff' : '#000')};
  font-size: 3rem;
`

const Info = styled.div`
  color: ${({color}) => (color ? '#fff' : '#000')};
  max-width: 500px;
  margin-top: 3rem;
`

const  Btn = styled.div`
  margin-top: 4rem;
`

const Img = styled.img`
  width: 600px;
  height: 100%;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin-top: 3rem;
  }
`

const HeroContent = ({image, title, id, info, Bgc, color}) => {
    return (
        <Content id={id}>
            <Background Bgc={Bgc}>
                <Wrapper>
                    <Heading>
                        <Title color={color}>{title}</Title>
                        <Info color={color}>{info}</Info>
                        <Btn>
                            <Button to='/'>view</Button>
                        </Btn>
                    </Heading>
                    <Img src={image}></Img>
                </Wrapper>
            </Background>
        </Content>
    )
}

export default HeroContent