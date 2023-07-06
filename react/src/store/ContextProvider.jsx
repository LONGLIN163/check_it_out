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
 
   const [currentUser, setCurrentUser] = useState({
      name: 'Tom Cook',
      email: 'tom@example.com'
   });
   const [userToken, setUserToken] = useState('1');
   const [surveys, setSurveys] = useState([...FAKE_API]);

   //console.log(surveys)

    
  return (
    <UserContext.Provider value={{
      currentUser, setCurrentUser,
      userToken, setUserToken,
      surveys
    }}>
        {children}

    </UserContext.Provider>
  )
}

export const UserStateContext=()=>useContext(UserContext);