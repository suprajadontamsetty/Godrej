export const Mainfilterreducer=(state,action)=>{
   
  
  if (action.type === "MEN_CLOTHING"||action.type === "WOMEN_CLOTHING"||action.type === 'FOOT_WEAR') {
    
      return {...state,tempcart:[...state.originalcart.filter((item)=>item.type===action.payload)]}
    
   }
  else if(action.type==='RATING'){
    return {...state,tempcart:[...state.originalcart.filter((item)=>item.rating===action.payload)]}
  }
  else if(action.type==='SORT_LOW'){
    const sortedProducts = [...state.originalcart].sort((a, b) => a.price - b.price);
    return {...state,tempcart:[...sortedProducts]}
  }
  else if(action.type==='SORT_HIGH'){
    const sortedProducts = [...state.originalcart].sort((a, b) => b.price - a.price);
    return {...state,tempcart:[...sortedProducts]}
  }
  else if(action.type==='IN_STOCK'){
    return {...state,tempcart:[...state.originalcart.filter((item)=>item.stock==='in')]}
  }
  else if(action.type==='FAST_DELIVERY'){
    return {...state,tempcart:[...state.originalcart.filter((item)=>item.delivery==='fast')]}
  }
  else if(action.type==='CLEAR'){
    return {...state,tempcart:[]}
  }
   return {...state}
     
   }