import React from 'react'
import lightButton from "../../assets/website/light-mode-button.png";
import darkButton from "../../assets/website/dark-mode-button.png";


const DarkMode=() =>{
    const [theme,setTheme] = React.useState(localStorage.getItem("theme")?
    localStorage.getItem("theme"):"light");

    const element = document.documentElement;//access to index.html
    console.log(element)

        //adding theme to local and html
    React.useEffect(()=>{
        localStorage.setItem("theme",theme);
        if(theme == "dark"){
            element.classList.add("dark");
            element.classList.add("dark");
        }else {
            element.classList.remove('light')
            element.classList.remove('dark')

        }
    })

  return (
    <div onClick={()=> setTheme(theme=='dark'?"light":"dark")} className='realtive'>
        
      <img src={lightButton} alt=''  

      className={`w-12 cursor-pointer absolute
        ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />
      <img src={darkButton} alt=''   
      className={`w-12 cursor-pointer absolute 
        ${theme === "light" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />
    </div>
  )
}

export default DarkMode
