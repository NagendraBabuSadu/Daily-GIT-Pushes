import wallPic from "/src/assets/images/wallPic.png";
import Astria_logo from "/src/assets/images/Astria_logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../slices/userSlice";
import { useState, useEffect } from "react";



export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmailInput] = useState(" ");
    const [storedEmail, setStoredEmail] = useState(() => {
        return localStorage.getItem("email") || " ";  // Get stored email from localStorage
    });


    const handleChange = (event) => {
        setEmailInput(event.target.value);
    }

    const handleFocus = () => {
        setEmailInput(storedEmail);
    };


    const navigateToResumeScreen = () => {
        if (email) {
            console.log("email", email)
            localStorage.setItem("email", email);
            dispatch(setEmail({emailId: email}));
            navigate("/resume");
        } else {
            console.error("please enter a valid email");
        }
    };

    return (
        <div className="loginComponentDiv">
            {/* Logo Div */}
            <div
                style={{
                    display: "flex",
                    paddingTop: "10px",
                    paddingLeft: "30px",
                    position: "relative",
                }}
            >
                <img
                    style={{
                        width: "180px",
                        height: "60px",
                    }}
                    src={Astria_logo}
                    alt="Astria_logo"
                />
            </div>

            {/* Main content Div */}
            <div className="pageDiv">
                <div className="loginComponentLeftDiv">
                    <div className="bgImageDiv" style={{ display: "flex" }}>
                        <img
                            style={{
                                width: "800px",
                            }}
                            src={wallPic}
                            alt="wallPic"
                        />
                    </div>
                </div>
                <div className="loginComponentRightDiv">
                    {/* Right side content */}
                    <div className="loginPageDivHeadingText">
                        <h1>Onboarding Portal</h1>
                        <p>
                            Welcome to Astria Digital! Please login to start your Onboarding
                            journey.{" "}
                        </p>
                    </div>
                    <div className="loginEmailAddress">
                        <label htmlFor="">EMAIL ADDRESS</label> <br />
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
                        <p>
                            By continuing, you are indicating that you have read and agree to
                            the <b> Terms of Use </b>and <b>Privacy Policy.</b>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


