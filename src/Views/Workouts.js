import "./Workouts.css"
import axios from "axios"
import {useState, useEffect} from "react"
import WorkoutDisplay from "../Components/WorkoutDisplay/WorkoutDisplay"

const Workouts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [workouts, setWorkouts] = useState({})

    const [fakeWorkouts, setFakeWorkouts] = useState({ 
        "bodyweight routine" : { 
            name : "bodyweight routine", 
            description : "full body calistelics workout", 
            tags : ["beginner", "calistelics", "full body"] 
        }, 
        "leg day" : { 
            name : "leg day", 
            description : "don't skip it", 
            tags : ["beginner", "calistelics", "legs"] 
        } 
    }) 

    useEffect(() => {
        
        axios.get("http://localhost:8000/workouts/workouts")
        .then(res => {
            setWorkouts(res.data.workouts)
            setIsLoading(false);
        })
        .catch(error => {
            // setError(error.message);
            setWorkouts({...fakeWorkouts})
            setIsLoading(false);
        });

    }, [])

    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }

    if(error){
        return(
            <div>
                Error: {error}
            </div>
        )
    }

    return(
        <div>
            <div className="workouts-container">
                {
                    Object.values(workouts).map( (workout) => {
                        return <WorkoutDisplay 
                        name={workout.name} 
                        description={workout.description} 
                        tags={workout.tags} />
                    } )
                }
            </div>
        </div>
    )
}



export default Workouts;