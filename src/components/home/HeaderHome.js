import styled from "styled-components";
import video1 from '../../videos/video1.mp4'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {useState} from 'react'
import {Button} from "../Button";

const Home = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 760px;
`

const HeaderBg = styled.div`
  height: 800px;
`

const HeaderBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.h1`
  position: absolute;
  color: #fff;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 250px;
  
  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
`

const Note = styled.p`
  position: absolute;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 50px;
  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`

const Btn = styled.div`
  z-index: 1;
  margin-top: 400px;
`

const ArrowLeft = styled(AiOutlineArrowLeft)`
  margin: 0 0 -2px 4px;
`

const ArrowRight = styled(AiOutlineArrowRight)`
  margin: 0 0 -2px 4px;
`

const HeaderHome = () => {

    const [hover, setHover] = useState(false)
    const handleHover = () => setHover(!hover)

    return (
        <Home id="home">
            <HeaderBg>
                <HeaderBackground autoPlay loop muted src={video1} type='video/mp4'></HeaderBackground>
            </HeaderBg>
            <Title>Best Anime</Title>
            <Note>Check the greatest anime ranking with the latest trends
            </Note>
            <Btn>
                <Button to='signup'
                        onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    Get start {hover ? <ArrowLeft /> : <ArrowRight />}
                </Button>
            </Btn>
        </Home>
    )
}

export default HeaderHome