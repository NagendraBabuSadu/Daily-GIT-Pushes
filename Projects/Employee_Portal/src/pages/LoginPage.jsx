import wallPic from "/src/assets/images/wallPic.png";
import connect from "/src/assets/images/connect.png"
import LoginEmailComponent from "../components/LoginEmailComponent";
import { useState } from "react";

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

                    <LoginEmailComponent />  
                    <p>
                        By continuing, you are indicating that you have read and agree to
                        the <b> Terms of Use </b>and <b>Privacy Policy.</b>{" "}
                    </p>

                </div>
            </div>
        </div>
    );
}


