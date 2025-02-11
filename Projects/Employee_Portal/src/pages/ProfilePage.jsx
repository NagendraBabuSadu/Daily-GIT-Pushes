import PersonalDetails from "../components/atoms/PersonalDetails";
import useUserHook from "../hooks/UseUserHook";
import ProfileDetails from "../components/atoms/ProfileDetails";
import { useSelector } from "react-redux";


export default function ProfilePage() {

    const { user, setUser, imageFile, setImageFile, handleUser, savePersonDetails } = useUserHook();
    const userSelector = useSelector((state) => state.resumeProfile.user);

    
    return (
      
            <div className="profilePage">
                <PersonalDetails user={user} handleUser={handleUser} savePersonDetails={savePersonDetails}/>
                <ProfileDetails user={user} handleUser={handleUser} savePersonDetails={savePersonDetails}/>
                <div className="footerDeclaration">
                    <input type="checkbox" name="checked" id="" value={  user?.checked} onChange={handleUser} />
                    <p>I hereby declare that all the information provided in this form is true, complete, and accurate to the best of my knowledge. </p>
                </div>

                <button disabled={!  user?.checked} onClick={savePersonDetails} className="saveButton" >Save</button>
                <button disabled={!  user?.saveButton} className="saveButton">Submit</button>
            </div>
    
    );
}
