import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserDispatch } from "../slices/resumeSlice";

export default function ResumePage() {
    const [user, setUser] = useState("");

    //   const [file, setFile] = useState();

    const dispatch = useDispatch();

    const userSelector = useSelector((state) => state.resumeProfile.user);

    // console.log("user ----", userSelector);

    const handleUser = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            // console.log('----> user', user);
        }, 2000);

        return () => {
            clearTimeout(handler);
        };
    }, [user]);

    const savePersonDetails = () => {
        dispatch(setUserDispatch(user));
        // console.log("save user details")
    };

    function FileUpload() {
        const fileInputRef = useRef(null);
        const [image, setImage] = useState(null);
        const handlePhoto = (event) => {
            console.log(event.target.files);
            const uploadedImageUrl = setImage(URL.createObjectURL(event.target.files[0]));
            console.log("uploadedImageUrl", URL.createObjectURL(event.target.files[0]));
        };

        return (
            <div>
                {!image ? (
                    <input
                        type="file"
                        name="candidataPhoto"
                        id="candidataPhoto"
                        ref={fileInputRef}
                        onChange={handlePhoto}
                        style={{
                            display: "none",
                        }}
                    />
                ) : null}

                <button
                    onClick={() => fileInputRef.current.click()}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        width: "100px",
                        height: "fit-content",
                    }}
                >
                    Upload Photo
                </button>
                {image ? (
                    <img
                        src={image}
                        alt="Uploaded Preview"
                        style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            padding: "10px 10px",
                            marginLeft: "10px"

                        }}
                    />
                ) : (
                    <img
                        style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            padding: "10px 10px",
                            marginLeft: "10px"
                        }}
                    />
                )}
            </div>
        );
    }

    return (
        <div className="resumePage">
            <h2>Your Resume</h2>
            <div className="personalDetails">
                <div className="uploadImage">
                    <FileUpload />
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
                            name="dateOfBirth"
                            id="dateOfBirth"
                            value={user.dob }
                            onChange={handleUser}
                         
                        />
                    </div>
                </div>
            </div>
            <button onClick={savePersonDetails}>Save</button>
            {userSelector ? (
                <div style={{ marginTop: "100px" }}>
                    <p>
                        Redux First & Last Names: {userSelector?.firstName},{" "}
                        {userSelector?.lastName}, gender is {userSelector?.gender} and birth
                        date is {userSelector?.dateOfBirth}{" "}
                    </p>
                </div>
            ) : null}
        </div>
    );
}
