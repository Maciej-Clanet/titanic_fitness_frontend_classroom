import "./HeroText.css"
/*
Notes:
"children" is a special property, it will be replaced by what we enter between our tag when using it, example below
<HeroText>
    anything we write here is the children of HeroText
</HeroText
*/ 
const HeroText = ({headingText, children}) =>{
    return(
        <div className="hero-text-container">
            <h2>{headingText}</h2>
            <p>{children}</p>
        </div>
    )
}

export default HeroText;