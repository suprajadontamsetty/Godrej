export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const { item, ...state } = action.payload;
    const { cart } = state;

    const itemExist = cart.find((cartItem) => cartItem.id === item.id);

    if (!itemExist) {
      return { ...state, cart: [...cart, { ...item,quantity:1 }] };
    }
    else{
      alert("Already item is in cart")
    }
    return { ...state };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if(action.type==='REMOVE'){
    return{ ...state,cart:state.cart.filter((cartItem)=>cartItem.id!==action.payload)}
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'INC') {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
          }
          if (action.payload.type === 'DEC') {
            return { ...cartItem,  quantity: cartItem.quantity - 1 }
          }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.quantity !== 0)
    return { ...state, cart: tempCart }
  }
  if (action.type === 'GET_TOTALS') {
    let { total, quantity } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem
        const itemTotal = price * quantity

        cartTotal.total += itemTotal
        cartTotal.quantity += quantity
        return cartTotal
      },
      {
        total: 0,
        quantity: 0,
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, quantity }
  }
  throw new Error('no matching action type')
};
