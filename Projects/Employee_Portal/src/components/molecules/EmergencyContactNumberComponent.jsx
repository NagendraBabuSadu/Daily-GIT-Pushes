
import { useSelector } from "react-redux";

export default function EmergencyContactNumberComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);


    return (
        <div className="emergencyContactNumberDiv">
            <label htmlFor="text">Emergency Contact Number</label>
            <input
                type="number"
                name="userEmergencyContactNumber"
                value={user?.userEmergencyContactNumber}
                onChange={handleUser}               
            />
        </div>
    );
}
