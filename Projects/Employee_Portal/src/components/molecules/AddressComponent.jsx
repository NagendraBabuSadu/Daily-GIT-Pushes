
import { useSelector } from "react-redux";

export default function AddressComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("email", user?.userEmail)

    return (
        <div className="addressDiv">
            <label htmlFor="address">Address</label>
            <input
                type="text"
                name="userAddress"
                value={user?.userAddress}
                onChange={handleUser}               
            />
        </div>
    );
}
