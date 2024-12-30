import React from 'react'
import { useCart } from '../Contexts/Cart-Context'
export const Loading = () => {
    const {loading}=useCart();
    if(loading){
        return (
            <>
            <h1>Loading.....hehe</h1>
            </>
        )
    }
}

