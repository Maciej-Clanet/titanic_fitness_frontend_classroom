import "./WorkoutDisplay.css"
import { useNavigate } from "react-router-dom"

const WorkoutDisplay = ({name, description, tags}) => {
    const navigate = useNavigate()
    return(
        <div className="workout-display">
            <h2>{name}</h2>
            <div className="workout-info">
                <p>{description}</p>
                <div className="tags-container">
                    {tags.map(tag => <li>{tag}</li>)}
                </div>
                <button onClick={() => navigate(`/workout/${name}`)}>SEE DETAILS</button>
            </div>
            
        </div>
    )
}

export default WorkoutDisplay;