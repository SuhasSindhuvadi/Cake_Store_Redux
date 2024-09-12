import React from 'react'
import store from '../store/store'
import { buyCake, buyIceCream } from '../reducers/reducer'
import { useDispatch, useSelector } from 'react-redux'
const CakeShop = () => {
    const dispatch = useDispatch()

    const numberOfCake=useSelector(state=>state.cake.numberOfCake)
    const numberOfIceCream=useSelector(state=>state.iceCream.numberOfIceCream)
    const handleBuyCake = () => {
        dispatch(buyCake())
    }
    const handleBuyIceCream = () => {
        dispatch(buyIceCream())
    }

    return (
        <div>
            <p>Number of Cakes: {numberOfCake}</p>
            <p>Number of Ice Creams: {numberOfIceCream}</p>
            <button onClick={handleBuyCake}>Buy Cake</button>
            <button onClick={handleBuyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

export default CakeShop