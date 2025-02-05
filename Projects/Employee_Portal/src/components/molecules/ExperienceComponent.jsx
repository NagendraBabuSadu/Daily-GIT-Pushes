
import { useUserContext } from "../../contexts/UserContext"


export default function ExperienceComponent() {
    const { user, handleUser } = useUserContext();
    return ( 
        <div className="expDiv">
        <div className="totalExpDiv">
            <label htmlFor="">
                Total Experience
            </label>
            <input type="text" />
        </div>
        <div className="relExpDiv">
            <label htmlFor="">
                Relevant Experience
            </label>
            <input type="text" />
        </div>

    </div>
    )
}
