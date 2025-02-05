

import { useUserContext } from "../../contexts/UserContext"


export default function NoticePeriodComponent() {
    const { user, handleUser } = useUserContext();
    return (

        <div className="noticePeriodDiv">
            <label htmlFor="">Notice Period</label>
            <div>
                <input type="number" name="" id="" className="inputEnterValue" />
                <input type="text" name="" id="" className="readOnlyInput" placeholder="Days" readOnly />
            </div>
        </div>
    )
}
