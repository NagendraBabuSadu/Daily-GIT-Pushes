import { useUserContext } from "../../contexts/UserContext"


export default function EduDivComponent() {
    const { user, handleUser } = useUserContext();

    return (
        <div className="eduDiv">
            <label htmlFor="">Education Completion Date</label>
            <input type="date" name="eduCompDate" id="" value={user.eduCompDate} onChange={handleUser} />
        </div>
    )
}
