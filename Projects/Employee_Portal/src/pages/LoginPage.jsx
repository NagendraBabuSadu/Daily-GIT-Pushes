import wallPic from "/src/assets/images/wallPic.png";
import Astria_logo from "/src/assets/images/Astria_logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../slices/userSlice";
import { useState, useEffect } from "react";
import connect from "/src/assets/images/connect.png"
import EmailComponent from "../components/EmailComponent";


export default function LoginPage() {



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

                    <EmailComponent />
                    <p>
                        By continuing, you are indicating that you have read and agree to
                        the <b> Terms of Use </b>and <b>Privacy Policy.</b>{" "}
                    </p>

                </div>
            </div>
        </div>
    );
}


