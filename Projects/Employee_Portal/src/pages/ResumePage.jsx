import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDispatch } from "../slices/resumeSlice";
import PersonalDetails from "../components/atoms/PersonalDetails";
import OfficialDetails from "../components/atoms/OfficialDetails";
import { UserContext } from "../contexts/UserContext";
import LeftNavigationComponent from "../components/LeftNavigationComponent";

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

    useEffect(() => {
        if (userSelector) {
            setUser(userSelector);
            setImageFile(userSelector.image || "");
        }
    }, [userSelector]);

    const savePersonDetails = () => {
        console.log("save Details");
        console.log("-----user", user)
        dispatch(setUserDispatch({ ...user, image: imageFile }));
    };

    return (
        <UserContext.Provider value={{ user, setUser, handleUser, imageFile, setImageFile }} >
            <div className="resumePage">
                <PersonalDetails />
                <OfficialDetails />
                <div className="footerDeclaration">
                    <input type="checkbox" name="" id="" />
                    <p>I hereby declare that all the information provided in this form is true, complete, and accurate to the best of my knowledge. </p>
                </div>
                <button onClick={savePersonDetails} className="saveButton">Save</button>
            </div>
        </UserContext.Provider>
    );
}
