
import { useSelector } from "react-redux";


export default function BankNameComponent(props) {
    
    const {user, handleUser} = props;
    const userSelector = useSelector((state) => state.resumeProfile.user);

    console.log("bank name", user?.bankName)

    return (
        <div className="accountNumberDiv">
            <label htmlFor="userBankName">Bank Name</label>
            <input
                type="text"
                name="userBankName"
                value={user?.userBankName}
                onChange={handleUser}               
            />
        </div>
    );
}