

import { useUserContext } from "../../contexts/UserContext"


export default function UploadResumeComponent() {
    const { user, handleUser } = useUserContext();
    return (

        <div className="uploadResumeDiv">
        <label htmlFor="">Upload Resume</label>
        <div className="uploadResumeInputDiv">

            <input type="file" name="" id="" className="uploadResumeInput" />
        </div>
    </div>
    )
}
