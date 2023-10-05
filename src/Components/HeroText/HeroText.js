import "./HeroText.css"

const HeroText = ({headingText, children}) =>{
    return(
        <div className="hero-text-container">
            <h2>{headingText}</h2>
            <p>{children}</p>
        </div>
    )
}

export default HeroText;