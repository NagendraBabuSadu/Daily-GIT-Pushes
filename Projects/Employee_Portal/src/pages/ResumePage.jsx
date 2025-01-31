import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserDispatch } from "../slices/resumeSlice";
import UserProfileImage from "../components/UserImageComponent";

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
        dispatch(setUserDispatch({ ...user, image: imageFile }));
    };

    return (
        <div className="resumePage">
            {/* <p>Your Resume</p> */}
            <div className="personalDetails">
                <div className="uploadImage">
                    <UserProfileImage imageFile={imageFile}  setImageFile={setImageFile}/>
                </div>
                <div className="firstNameLastNameGenderDob">
                    <div className="firstNameDiv">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            value={user.firstName}
                            onChange={handleUser}
                        />
                    </div>
                    <div className="lastNameDiv">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleUser}
                        />
                    </div>
                    <div className="genderDiv">
                        <label htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            id="gender"
                            value={user.gender}
                            onChange={handleUser}
                        >
                            <option value="" style={{ opacity: "0.6" }} defaultChecked>
                                --Select--
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="dateOfBirthDiv">
                        <label htmlFor="dateOfBirth">Date of Birth</label>


                        <input
                            type="date"
                            // ref={dobRef}
                            name="dateOfBirth"
                            id="dateOfBirth"
                            value={user.dob}
                            onChange={handleUser}
                        />

                    </div>
                </div>
            </div>
            <div className="officialDetails">
                {/* Official Details */}
                <div className="emailDiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </div>
                <div className="mobileNumberDiv">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <div>
                        <select name="" id=""  className="selctOption" >
                            <option value="">+91</option>
                        </select>
                        <input type="number" name="" id="" className="mobileNumberInput"/>
                    </div>
                </div>
                <div className="eduDiv">
                    <label htmlFor="">Education Completion Date</label>
                    <input type="date" name="" id="" />
                </div>
                <div className="projectDiv">
                    <label htmlFor="">Project</label>
                    <div>
                        <input type="text" name="" id="" className="projectInput"/>
                        <select name="" id="" className="selctOption">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="jobRoleDiv">
                    <label htmlFor="">Job Role</label>
                    <div>
                        <input type="text" name="" id="" className="jobRoleInput"/>
                        <select name="" id="" className="selctOption">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="expDiv">
                    <div className="totalExpDiv">
                        <label htmlFor="">
                            Total Experience
                        </label>
                        <input type="text" />
                    </div>
                    <div className="relExpDiv">
                        <label htmlFor="">
                            Relevant Experience
                        </label>
                        <input type="text" />
                    </div>

                </div>
                <div className="noticePeriodDiv">
                    <label htmlFor="">Notice Period</label>
                    <div>
                        <input type="number" name="" id="" className="inputEnterValue" />
                        <input type="text" name="" id="" className="readOnlyInput" placeholder="Days" readOnly />
                    </div>
                </div>
                <div className="joiningDateDiv">
                    <label htmlFor="">Joining Date</label>
                
                      <input type="date" name="" id="" className="joiningDateInput" />
            
                </div>
                <div className="currentCtcDiv">
                    <label htmlFor="">Current CTC</label>
                    <div>
                        <input type="number" name="" id="" className="inputEnterValue" />
                        <input type="text" name="" id="" className="readOnlyInput" placeholder="INR per year" readOnly />
                    </div>
                </div>
                <div className="expectedCtcDiv">
                    <label htmlFor="">Expected CTC</label>
                    <div>
                        <input type="number" name="" id="" className="inputEnterValue" />
                        <input type="text" name="" id="" className="readOnlyInput" placeholder="INR per year" readOnly />
                    </div>
                </div>
                <div className="uploadResumeDiv">
                    <label htmlFor="">Upload Resume</label>
                    <div className="uploadResumeInputDiv">

                    <input type="file" name="" id=""  className="uploadResumeInput"/>
                    </div>
                </div>
                <div className="idProofDiv">
                    <label htmlFor="">ID Proof</label>
                    <div>
                        <select name="" id="" className="selctOption">
                            <option value="" >Select Type</option>
                        </select>
                        <input type="file" name="" id=""  className="idProofInput" />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="footerDeclaration">
                <input type="checkbox" name="" id="" />
                <p>I hereby declare that all the information provided in this form is true, complete, and accurate to the best of my knowledge. </p>
            </div>


            <button onClick={savePersonDetails} className="saveButton">Save</button>
     

        </div>
    );
}
