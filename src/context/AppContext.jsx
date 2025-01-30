import { createContext, useEffect, useState } from "react";
import placeholder from '../assets/placeholder.webp';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(placeholder);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

    useEffect(()=>{
      const savedData = localStorage.getItem('formData');
      if(savedData){
        setFormData(JSON.parse(savedData))
      }
  
    },[])



  // The context value passed to children
  const value = { profileImage, setProfileImage, formData, setFormData,  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


