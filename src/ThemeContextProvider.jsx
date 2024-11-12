import { createContext, useState } from "react";

export const Context = createContext ({
  mudar:() => {},
  temas: {}
})

export default function ThemeContextProvider({children}) {
 
          
  const [theme,setTheme] = useState("light")
  
  function toggleTheme(){ 
    setTheme(prevState => (prevState == "light")?"dark":"light" )    
  }
 
  const valores = {
    mudar:toggleTheme,
    temas:theme
  }

  return(
    <Context.Provider value={valores}>
      {children}
    </Context.Provider>

  )
}
  