import { useUserContext } from "../../contexts/UserContext"


export default function EmailComponent() {
    const {user, handleUser} = useUserContext();

    return (
        <div className="emailDiv">
            <label htmlFor="email">Email</label>
            <input type="email" name="userEmail" value={user.userEmail} onChange={handleUser} />
        </div>
    )
}
