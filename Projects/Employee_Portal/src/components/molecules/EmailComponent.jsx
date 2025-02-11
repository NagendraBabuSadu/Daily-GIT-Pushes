
import { useSelector } from "react-redux";
import useUserHook from "../../hooks/UseUserHook";

export default function EmailComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("email", user?.userEmail)

    return (
        <div className="emailDiv">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="userEmail"
                value={user?.userEmail}
                onChange={handleUser}               
            />
        </div>
    );
}
