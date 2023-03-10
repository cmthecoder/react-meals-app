import React, {useContext, useEffect} from 'react'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return <AppContext.Provider value={{name: 'John', role: 'students'}}>
    {children}
  </AppContext.Provider>
}


const useGlobalContext = () => {
  return useContext(AppContext)
}

export{AppContext, AppProvider, useGlobalContext}