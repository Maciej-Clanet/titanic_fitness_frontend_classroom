import "./Home.css"
import HeroText from "../Components/HeroText/HeroText"
import HeroImage from "../Components/HeroImage/HeroImage"
import MainImage from"../Assets/Joe1.png"
import ArticleImage1 from "../Assets/Pres1.png"
import ArticleImage2 from "../Assets/Ala1.png"
import ArticleImage3 from "../Assets/Mac1.png"

import { useNavigate } from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <HeroText headingText="UNSINKABLE GAINS">
                Crash through your fitness goals
            </HeroText>
            <HeroImage
                heading="START YOUR JOURNEY"
                text="Workout plans for any skill level"
                imgSrc={MainImage}
                onButtonClick={() => alert("button works")}
                buttonText="Start Now"
                position="left"
            />
             <HeroText headingText="Brain is the best muscle">
                Exercise it with the best weights
            </HeroText>
            <HeroImage
                heading="Nutrition is key"
                text="Tips and tricks from the hummus king"
                imgSrc={ArticleImage2}
                onButtonClick={() => navigate("/article/nutrition is key")}
                buttonText="Read More"
                position="right"
            />
            <HeroImage
                heading="Lif your mind"
                text="Get swole brain by learning React"
                imgSrc={ArticleImage3}
                onButtonClick={() => navigate("/article/lift your mind")}
                buttonText="Read More"
                position="right"
            />
            <HeroImage
                heading="Running For Longevity"
                text="Sage advice from boomers in the running"
                imgSrc={ArticleImage1}
                onButtonClick={() => navigate("/article/running for longevity")}
                buttonText="Read More"
                position="right"
            />
        </div>
    )
}

export default Home