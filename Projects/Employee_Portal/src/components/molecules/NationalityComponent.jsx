
import { useSelector } from "react-redux";
import useUserHook from "../../hooks/UseUserHook";

export default function NationalityComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("nationality", user?.userNationality)

    return (
        <div className="nationalityDiv">
            <label htmlFor="nationality">Nationality</label>
            <input
                type="text"
                name="userNationality"
                value={user?.userNationality}
                onChange={handleUser}               
            />
        </div>
    );
}
