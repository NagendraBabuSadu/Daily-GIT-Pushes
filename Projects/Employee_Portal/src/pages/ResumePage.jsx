import PersonalDetails from "../components/atoms/PersonalDetails";
import OfficialDetails from "../components/atoms/OfficialDetails";
import { useNavigate } from "react-router-dom";
import useUserHook from "../hooks/UseUserHook";


export default function ResumePage() {

    const { user, handleUser, savePersonDetails,setImageFile,imageFile } = useUserHook();
    const navigate = useNavigate();


    const navigateToProfilePage = () => {
        navigate("/profilePage")
    }

    return (
       
            <div className="resumePage">
                <PersonalDetails user={user} handleUser={handleUser} setImageFile={setImageFile} imageFile={imageFile}  />
                <OfficialDetails  user={user} handleUser={handleUser} />
           
                <div className="footerDeclaration">
                    <input type="checkbox" name="checked" id="" value={user?.checked} onChange={handleUser} />
                    <p>I hereby declare that all the information provided in this form is true, complete, and accurate to the best of my knowledge. </p>
                </div>

                <button type="button"  onClick={savePersonDetails} className="saveButton" >Save</button>
                <button disabled={!user?.saveButton} onClick={navigateToProfilePage} className="saveButton">Submit</button>
            </div>
     
    );
}
