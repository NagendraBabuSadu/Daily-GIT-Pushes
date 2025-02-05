import {  useRef, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

export default function UserProfileImage() {
    
    const {imageFile, setImageFile} = useUserContext();

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const handlePhoto = (event) => {
        const file = URL.createObjectURL(event.target.files[0])
        setImageFile(file);
        const uploadedImageUrl = setImage(URL.createObjectURL(event.target.files[0]));
        console.log("uploadedImageUrl", URL.createObjectURL(event.target.files[0]));
        fileInputRef.current.value = "";
    };

    return (
        <div>
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
                    margin: "0px 10px 6px"
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
                        objectFit: "fill",
                        backgroundColor: "currentcolor",
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