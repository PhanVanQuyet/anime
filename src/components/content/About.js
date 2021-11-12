import styled from "styled-components";
import img1 from '../../images/another.jpg'
import img2 from '../../images/another2.jpg'
import img3 from '../../images/another3.jpg'

const Container = styled.div`
  height: 700px;
  
  @media screen and (max-width: 960px) {
  height: 100%;
  margin-bottom: 2rem;
  }
`

const Header = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  width: 300px;
  height: 500px;
  background-color: #000;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 20px;
`

const Title = styled.div`
  color: #fff;
  margin: 2rem 0 0 1rem;
  font-size: 1.6rem
`

const Note = styled.div`
  color: #fff;
  margin: 2rem 0 0 1rem;
`

const About = () => {
    return (
        <Container id='contactus'>
            <Header>Another</Header>
            <Content>
                <Wrapper>
                    <Item>
                        <Img src={img1}></Img>
                        <Title>Horror</Title>
                        <Note>in the class photo</Note>
                    </Item>
                    <Item>
                        <Img src={img2}></Img>
                        <Title>School</Title>
                        <Note>The person who shouldn't have appeared has appeared in the photo</Note>
                    </Item>
                    <Item>
                        <Img src={img3}></Img>
                        <Title>Supernatural</Title>
                        <Note>My classmates don't want to accept the truth so they still pretend that Mei is still alive</Note>
                    </Item>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default About
