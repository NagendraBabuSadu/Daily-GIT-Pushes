import { useState } from "react";
import connect from "/src/assets/images/connect.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function LeftNavigationComponent({selectedIndex, setSelectedIndex}) {
    const navigationListData = [
        {
            name: "Resume",
            path: "/resume",
        },
        {
            name: "Interview",
            path: "/interviewPage",
        },
        {
            name: "Profile",
            path: "/profilePage",
        },
        {
            name: "Offer Letter",
            path: "/interviewPage",
        },
        {
            name: "Declaration",
            path: "/interviewPage",
        },
        {
            name: "Appointment",
            path: "/interviewPage",
        },
        {
            name: "Access Details",
            path: "/interviewPage",
        },
        {
            name: "NDA",
            path: "/interviewPage",
        },
        {
            name: "Client Access",
            path: "/interviewPage",
        },
        {
            name: "Tax Declaration",
            path: "/interviewPage",
        },
        {
            name: "Enroll Medical & PF",
            path: "/interviewPage",
        },
    ];

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <div className="leftNavbarDiv">
            {/* image Div */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    width: "250px",
                    position: "relative",
                }}
            >
                <img
                    style={{
                        width: "170px",
                    }}
                    src={connect}
                    alt=""
                />
            </div>
            <div>
                <ol
                    style={{
                        margin: "60px 30px",
                        padding: "10px ",
                        paddingTop: "1px",
                        // backgroundColor: "brown",
                        height: "60vh",
                        display: "grid",
                        justifyContent: "center",
                        width: "170px",
                        position: "relative",
                    }}
                >
                    {navigationListData.length > 0 &&
                        navigationListData?.map((navItem, index) => {
                            const isActive = location.pathname === navItem.path;
                            return (
                                <li
                                    key={index}
                                    //   className="listOfNavItems"
                                    className={isActive ? 'listOfNavItemsSelected' : "listOfNavItems"}
                                    onClick={() => {
                                        // handleClick(index);
                                        navigate(navItem.path);
                                    }}
                                    style={{
                                        listStyle: "none",
                                        fontFamily: "Sans-Serif",
                                        fontSize: "16px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {navItem.name}
                                </li>
                            );
                        })}
                </ol>
            </div>

            <div
                style={{
                    display: "grid",
                    margin: "60px 30px",
                    padding: "10px ",
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    textAlign: "center",
                }}
            >
                <p>2025 Connect Thou Pvt. Ltd</p>
                <p>End to End Encrypted.</p>
            </div>
        </div>
    );
}
