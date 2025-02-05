import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../slices/userSlice";
import { useState, useEffect } from "react";

export default function LoginEmailComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmailInput] = useState(" ");
    const [storedEmail, setStoredEmail] = useState(() => {
        return localStorage.getItem("email") || " "; // Get stored email from localStorage
    });

    const handleChange = (event) => {
        setEmailInput(event.target.value);
    };

    const handleFocus = () => {
        setEmailInput(storedEmail);
    };

    const navigateToResumeScreen = () => {
        if (email) {
            console.log("email", email);
            localStorage.setItem("email", email);
            dispatch(setEmail({ emailId: email }));
            navigate("/resume");
        } else {
            console.error("please enter a valid email");
        }
    };

    return (
        <div>
            <div className="loginEmailAddress">
                <label htmlFor="">EMAIL ADDRESS</label> <br />
                {" "}
                <input
                    name="emailId"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </div>

            <div className="buttonPlusText">
                <button
                    type="submit"
                    style={{
                        cursor: "pointer",
                        transition: "all ease 200ms",
                    }}
                    className="buttonNext"
                    onClick={navigateToResumeScreen}
                >
                    NEXT
                </button>
            </div>
        </div>
    );
}
