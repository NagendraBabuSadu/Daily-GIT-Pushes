

import { useUserContext } from "../../contexts/UserContext"


export default function IdProofComponent() {
    const { user, handleUser } = useUserContext();
    return (


        <div className="idProofDiv">
            <label htmlFor="">ID Proof</label>
            <div>
                <select name="" id="" className="selctOption">
                    <option value="" >Select Type</option>
                </select>
                <input type="file" name="" id="" className="idProofInput" />
            </div>
        </div>
    )
}
