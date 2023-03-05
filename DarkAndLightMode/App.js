import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"


export default function App() {
    const [light,setLight]=React.useState(true)
     
     function toggleDarkMode(){
         setLight(prev=>!prev)
     }
    return (
        <div className="container">
            <Navbar 
            darkMode={light}
            toggleDarkMode={toggleDarkMode}/>
            <Main  darkMode={light}/>
        </div>
    )
}