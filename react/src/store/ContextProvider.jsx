import { createContext, useContext, useState } from "react";
import FAKE_API from "../assets/fakeApi";

const UserContext=createContext({
  currentUser:{},
  setcurrentUser:()=>{},
  surveys:[],
  userToken:null,
  setUserToken:()=>{}
});


export const UserContextProvider= ({children}) => {
 
   const [currentUser, setCurrentUser] = useState({});
   const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
   const [surveys, setSurveys] = useState([...FAKE_API]);

   const setUserToken= (token) => {
     console.log(token)
    
     if(token){
      localStorage.setItem('TOKEN',token);
     }else{
      localStorage.removeItem('TOKEN');
     }
     _setUserToken(token);
   }
    
  return (
    <UserContext.Provider value={{
      currentUser, 
      setCurrentUser,
      userToken, 
      setUserToken,
      surveys
    }}>
        {children}

    </UserContext.Provider>
  )
}

export const UserStateContext=()=>useContext(UserContext);
