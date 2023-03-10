import React, {useContext} from 'react'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {



  return <AppContext.Provider value={{name: 'John', role: 'students'}}>
    {children}
  </AppContext.Provider>
}


const useGlobalContext = () => {
  return useContext(AppContext)
}

export{AppContext, AppProvider, useGlobalContext}