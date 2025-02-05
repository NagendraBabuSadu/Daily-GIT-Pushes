

import { useUserContext } from "../../contexts/UserContext"


export default function ExpectedCtcComponent() {
    const { user, handleUser } = useUserContext();
    return (

        <div className="expectedCtcDiv">
        <label htmlFor="">Expected CTC</label>
        <div>
            <input type="number" name="" id="" className="inputEnterValue" />
            <input type="text" name="" id="" className="readOnlyInput" placeholder="INR per year" readOnly />
        </div>
    </div>
    )
}
