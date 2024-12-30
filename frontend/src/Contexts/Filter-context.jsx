import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { filterreducer } from "../Reducers/FilterReducer";
import { FeaturedItems } from "../Components/HomePageArray";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const WomenAssets=FeaturedItems.filter((item)=>item.type==='women');
  const [searchTerm, setsearchTerm] = useState("search like jeans");
  const initialCart = {
     originalcart:WomenAssets,
     tempcart:[],
  }
  const [state, dispatch] = useReducer(filterreducer, initialCart);

  
  useEffect(() => {
    dispatch({ type: "FILTER", payload:{searchTerm}});
  },[searchTerm]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        searchTerm,
        setsearchTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
