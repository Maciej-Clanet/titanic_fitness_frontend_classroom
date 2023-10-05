import "./HeroImage.css"

/* 
NOTES:
`backticks` are used to be able to insert variable into the string of text, which is how we get the position css in the main containers
buttonText.toUpperCase() will ensure the button text is always all caps even if we forget to write it like that later
*/

const HeroImage = ({heading, text, imgSrc, onButtonClick, buttonText, position}) =>{
    return(
        <div className={`hero ${position}`}>
            <img className="hero-image" src={imgSrc} alt={"Hero"}/>
            <div className="hero-content">
                <h1>{heading}</h1>
                <p>{text}</p>
                <button onClick={onButtonClick}>
                    {buttonText.toUpperCase()}
                </button>
            </div>
        </div>
    )
}
export default HeroImage;