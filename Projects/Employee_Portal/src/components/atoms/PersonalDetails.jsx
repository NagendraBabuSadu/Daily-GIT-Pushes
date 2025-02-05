
import { useUserContext } from "../../contexts/UserContext"
import UserProfileImage from "../molecules/UserProfileImage"


export default function PersonalDetails() {

    const {user, setUser, handleUser, imageFile, setImageFile} = useUserContext();
  
    return (
        <div>
            <div className="personalDetails">
                <div className="uploadImage">
                    <UserProfileImage  />
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
        </div>
    )
}

