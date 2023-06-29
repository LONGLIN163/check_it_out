import { createContext, useContext, useState } from "react";

const UserContext=createContext({
  currentUser:{},
  setcurrentUser:()=>{},
  userToken:null,
  setUserToken:()=>{}
});

export const UserContextProvider= ({children}) => {
 
   const [currentUser, setCurrentUser] = useState({
      name: 'Tom Cook',
      email: 'tom@example.com'
   });
   const [userToken, setUserToken] = useState('1');
    
  return (
    <UserContext.Provider value={{
      currentUser, setCurrentUser,
      userToken, setUserToken
    }}>
        {children}

    </UserContext.Provider>
  )
}

export const UserStateContext=()=>useContext(UserContext);
