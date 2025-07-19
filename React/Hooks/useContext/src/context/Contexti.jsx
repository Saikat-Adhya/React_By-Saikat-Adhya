import React,{ createContext } from "react";
//1st step: Create a context

export const BioContext = createContext();

//2nd step: Create a provider component
export const BioProvider = ({children}) => {
  const [count,setCount] = React.useState(0);
  return (
    <BioContext.Provider value={{count,setCount}}>
      {/* Children components will go here */}
      {children}
    </BioContext.Provider>
  );
}   
//3rd step: Create a consumer component