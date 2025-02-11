
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDispatch } from "../slices/resumeSlice";

export default function useUserHook () {
   const [user, setUser] = useState({});
   const [imageFile, setImageFile] = useState("");
   const dispatch = useDispatch();
   const userSelector = useSelector((state) => state.resumeProfile.user);
   

   const handleUser = (event) => {
       
       const { name, value, checked } = event.target;
   
       if(name == "checked" ) {
           setUser((prev) => ({
               ...prev,
               [name]: checked
           })) 
           return;
       }
     
       setUser((prev) => ({
            ...prev,
           [name]: value,
       }));
   };


   useEffect(() => {
       if (userSelector) {
           setUser(userSelector);
           setImageFile(userSelector?.image || "");
       }
   }, [userSelector]);

   console.log("image,-----", imageFile)
   const savePersonDetails = () => {
       dispatch(setUserDispatch({ ...user, image: imageFile, saveButton: true }));

   };
    return {
        user, setUser, imageFile, setImageFile, handleUser, savePersonDetails
    }
}