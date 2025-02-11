
import { useSelector } from "react-redux";

export default function CityComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);



    return (
        <div className="cityDiv">
            <label htmlFor="userCity">City</label>
            <input
                type="text"
                name="userCity"
                value={user?.usercity}
                onChange={handleUser}               
            />
        </div>
    );
}
