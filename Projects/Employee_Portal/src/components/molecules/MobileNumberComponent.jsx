import { useUserContext } from "../../contexts/UserContext"


export default function MobileNumberComponent() {
    const { user, handleUser } = useUserContext();

    return (
        <div className="mobileNumberDiv">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <div>
                <select name="" id="" className="selctOption" >
                    <option value="">+91</option>
                </select>
                <input type="number" name="userPhoneNumber" id="" className="mobileNumberInput" value={user.userPhoneNumber} onChange={handleUser} />
            </div>
        </div>
    )
}
