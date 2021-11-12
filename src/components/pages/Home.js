import Sidebar from "../navbar/Sidebar";
import Navbar from "../navbar/Navbar";
import HeaderHome from "../home/HeaderHome";
import HeroContent from "../content/HeroContent";
import {Data1, Data2} from "../content/Data";
import About from "../content/About";
import {useState} from 'react'
import Footer from "../footer/Footer";


const Home = () => {

    const [isOpent, setIsOpent] = useState(false)
    const handleClick = () => {
        setIsOpent(!isOpent)
    }

    return (
        <>
            <Sidebar handleClick={handleClick} isOpent={isOpent}/>
            <Navbar handleClick={handleClick}/>
            <HeaderHome />
            <HeroContent {...Data1}/>
            <HeroContent {...Data2}/>
            <About />
            <Footer />
        </>
    )
}

export default Home