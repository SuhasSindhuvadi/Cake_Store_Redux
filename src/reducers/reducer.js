// Action types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        info:"buy cake action" 
    };
};

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info:"buy ice cream action" 
    };
};

const initialCakeState={
    numberOfCake:10
}
const initialIceCreamState={
    numberOfIceCream:10
}

// Reducers
export const cakeReducer = (state = initialCakeState, action) => {
    if (action.type === BUY_CAKE) {
      return {
        ...state,
        numberOfCake:state.numberOfCake>0 ? state.numberOfCake - 1:0
      };
    } else {
      return state;
    }
  };
  
  export const iceCreamReducer = (state = initialIceCreamState, action) => {
    if (action.type === BUY_ICECREAM) {
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream>0 ? state.numberOfIceCream - 1:0
      };
    } else {
      return state;
    }
  };
  