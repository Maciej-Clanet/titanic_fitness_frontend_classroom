import "./Home.css"
import HeroText from "../Components/HeroText/HeroText"
import HeroImage from "../Components/HeroImage/HeroImage"
import MainImage from"../Assets/Joe1.png"
import ArticleImage1 from "../Assets/Pres1.png"

const Home = () =>{
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
                heading="Running For Longevity"
                text="Sage advice from boomers in the running"
                imgSrc={ArticleImage1}
                onButtonClick={() => alert("button works")}
                buttonText="Read More"
                position="right"
            />
        </div>
    )
}

export default Home