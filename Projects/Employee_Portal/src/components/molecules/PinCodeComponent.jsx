
import { useSelector } from "react-redux";

export default function PinCodeComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);



    return (
        <div className="pincodeDiv">
            <label htmlFor="userpincode">PIN Code</label>
            <input
                type="text"
                name="userpincode"
                value={user?.userpincode}
                onChange={handleUser}               
            />
        </div>
    );
}
