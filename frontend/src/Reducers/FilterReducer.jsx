export const filterreducer=(state,action)=>{

 const {searchTerm}=action.payload;

   if (action.type === "FILTER") {
    if(searchTerm.length>0){
      const temp=state.originalcart.filter((item)=>item.Itemname.toLowerCase().startsWith(searchTerm));
      if(temp.length>0){
        return {...state,tempcart:temp}
      }
      else{
        return {...state,tempcart:[...state.originalcart]}
      }
    }
    else{
      return {...state,tempcart:[...state.originalcart]}
    }
   
   }
  
   return {...state}
}