import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserDispatch } from "../slices/resumeSlice";
import PersonalDetails from "../components/atoms/PersonalDetails";
import OfficialDetails from "../components/atoms/OfficialDetails";

export default function ResumePage() {
    const [user, setUser] = useState("");
    const [imageFile, setImageFile] = useState("");
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.resumeProfile.user);
  
    const handleUser = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const savePersonDetails = () => {        
        console.log("save Details");
        console.log("-----user", user)
        dispatch(setUserDispatch({ ...user, image: imageFile }));
    };

    return (
        <div className="resumePage">
        <PersonalDetails imageFile={imageFile} setImageFile={setImageFile} user={user} setUser={setUser} handleUser={handleUser} />
        <OfficialDetails  user={user} setUser={setUser} handleUser={handleUser} />           
            <div className="footerDeclaration">
                <input type="checkbox" name="" id="" />
                <p>I hereby declare that all the information provided in this form is true, complete, and accurate to the best of my knowledge. </p>
            </div>


            <button onClick={savePersonDetails} className="saveButton">Save</button>
     

        </div>
    );
}
