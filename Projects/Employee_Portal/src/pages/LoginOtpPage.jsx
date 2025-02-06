import wallPic from "/src/assets/images/wallPic.png";
import connect from "/src/assets/images/connect.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function LoginOtpPage() {
    const [otpKey, setOtpKey] = useState("");
    const navigate = useNavigate();
    const email = localStorage.getItem("email");


    const navigateToResumeScreen = () => {
        navigate("/resume");
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
                    src={connect}
                    alt="conect_img"
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
                    <div className="loginPageDivHeadingText">
                        <h1>Onboarding Portal</h1>
                        <p>
                            Welcome to Astria Digital! Please login to start your Onboarding
                            journey.{" "}
                        </p>
                    </div>

                    <div>
                        <p>OTP sent on  <b style={{color: "#840474"}} > {email}</b>, Please enter below to verify</p>

                        <div style={{ display: "flex", gap: "10px" }}>
                            {[...Array(6)].map((_, index)=> (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    style={{
                                        boxSizing: "border-box",
                                        width: "60px",
                                        height: "60px",
                                        fontSize: "4rem",
                                        textAlign: "center"
                                    }}
                                />
                            ))}
                        </div>


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
                            CONFIRM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


