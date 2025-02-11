
import { useSelector } from "react-redux";


export default function IfscComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("bank name", user?.userIfsc)

    return (
        <div className="accountNumberDiv">
            <label htmlFor="userIfsc">IFSC Code</label>
            <input
                type="text"
                name="userIfsc"
                value={user?.userIfsc}
                onChange={handleUser}               
            />
        </div>
    );
}