import React, { createContext,useContext,useReducer } from "react";
import { FeaturedItems } from "../Components/HomePageArray";
import { Mainfilterreducer } from "../Reducers/MainFilterReducer";

const MainFilterContext=createContext();
const initialCartItems = {
    originalcart:FeaturedItems,
    tempcart:[],
  
 }
 const MainFilterProvider=({children})=>{
    const [state, dispatch] = useReducer(Mainfilterreducer, initialCartItems);
    return(
      <MainFilterContext.Provider value={{...state,dispatch}}>
        {children}
      </MainFilterContext.Provider>
    );
}


export const useMainFilter = () => {
    return useContext(MainFilterContext);
  };
  
  export { MainFilterContext,MainFilterProvider };