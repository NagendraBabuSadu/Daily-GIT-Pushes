
import { useSelector } from "react-redux";


export default function BranchLocationComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("bank name", user?.userBranchLocation)

    return (
        <div className="accountNumberDiv">
            <label htmlFor="userBranchLocation">Branch Location</label>
            <input
                type="text"
                name="userBranchLocation"
                value={user?.userBranchLocation}
                onChange={handleUser}               
            />
        </div>
    );
}