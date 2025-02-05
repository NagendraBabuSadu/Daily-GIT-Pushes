

import { useUserContext } from "../../contexts/UserContext"


export default function JoiningDateComponent() {
    const { user, handleUser } = useUserContext();
    return (

        <div className="joiningDateDiv">
        <label htmlFor="">Joining Date</label>

        <input type="date" name="" id="" className="joiningDateInput" />

    </div>
    )
}
