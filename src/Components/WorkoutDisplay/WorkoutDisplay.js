import "./WorkoutDisplay.css"
import { useNavigate } from "react-router-dom"

const WorkoutDisplay = ({name, description, tags}) => {
    const navigate = useNavigate()
    return(
        <div className="workout-display">
            
            <div className="workout-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="tags-container">
                    <ul>
                        {tags.map(tag => <li>{tag}</li>)}
                    </ul>
                </div>
                
            </div>
            <div className="workout-buttons">
             <button onClick={() => navigate(`/workout/${name}`)}>See Routine</button>
            </div>
            
        </div>
    )
}

export default WorkoutDisplay;