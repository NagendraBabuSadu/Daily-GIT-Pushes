import Astria_logo from "/src/assets/images/Astria_logo.png"


export default function LeftNavigationComponent() {
    const navigationListData = ['Resume', 'Interview', 'Profile', 'Offer letter', 'Declaration', 'Appointment', 'Access Details', 'NDA', 'Client Access', 'Tax Declaration', 'Enroll Medical & PF'];

    return (
        <div className="leftNavbarDiv" >

            {/* image Div */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
                width: "250px",
                position: "relative"
            }} >

                <img style={{
                    width: "170px"
                }} src={Astria_logo} alt="" />


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
                        position: "relative"

                    }}>
                    {navigationListData.length > 0 && navigationListData?.map((navItem, index) => {
                        return (
                            <li key={index} className="listOfNavItems" style={{
                                listStyle: "none",
                                fontFamily: "Sans-Serif",
                                fontSize: "16px",
                                padding: "5px 10px",
                                cursor: "pointer",
                                textAlign: "left",
                                fontWeight: "bold"
                            }} >{navItem}</li>
                        )
                    })}
                </ol>
            </div>

            <div style={{
                display: "grid",
                margin: "60px 30px",
                padding: "10px ",
                fontFamily: "sans-serif",
                fontSize: "13px",
                textAlign: "center"

            }}>
                <p>2025 Astria Digital Pvt. Ltd</p>
                <p>End to End Encrypted.</p>
            </div>

        </div>

    )
}