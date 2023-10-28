//loging update ,user information 

import { createContext, useEffect,useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{ //childern is we did protect all components firstly
    const [currentUser,setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null //check wheter there is a user inside local storage or not
    );

    const login = () =>{ //this function update user and store information
        //TO DO 
        setcurrentUser({
                id:1,
           // name:"Amanda Barnes",
              name:"Mitchel Smith",
              profilePic:"/assets/Profile.jpg",
        });
    };

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser));  //write it localstorage profile pic,usename etc so cannot get boolean so get object so we use json stringify
    },[currentUser]) 

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}</AuthContext.Provider>
    )

};