
import { useSelector } from "react-redux";
import useUserHook from "../../hooks/UseUserHook";

export default function AccountNumberComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("accountNumber", user?.useraccountNumber)

    return (
        <div className="accountNumberDiv">
            <label htmlFor="userAccountNumber">A/C Number</label>
            <input
                type="text"
                name="userAccountNumber"
                value={user?.userAccountNumber}
                onChange={handleUser}               
            />
        </div>
    );
}
