import "./HeroImage.css"

const HeroImage = ({heading, text, imgSrc, onButtonClick, buttonText, position}) =>{
    return(
        <div className={`hero ${position}`}>
            <img className="hero-image" src={imgSrc} alt={"Hero"}/>
            <div className="hero-content">
                <h1>{heading}</h1>
                <p>{text}</p>
                <button className="hero-button" onClick={onButtonClick}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}
export default HeroImage;