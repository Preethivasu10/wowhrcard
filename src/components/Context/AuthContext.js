import React, { createContext, useState } from 'react'

const AuthContext = createContext({Name:"", designation:"", Linkedin:"", dp:"", setName:undefined, setdesignation:undefined, setlinkedin:undefined, setdp:undefined})

export function AuthContextProvider(props) {

    let [Name , setName] = useState("");
    let [designation , setdesignation] = useState("");
    let [Linkedin , setlinkedin] = useState("");
    const [dp , setdp] = useState();

  return (
    <AuthContext.Provider value={{Name:Name, designation:designation, Linkedin:Linkedin, dp:dp, setName:setName, setdesignation:setdesignation, setlinkedin:setlinkedin, setdp:setdp}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext