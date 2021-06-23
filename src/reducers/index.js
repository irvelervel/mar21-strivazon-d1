import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      // const newProducts = state.cart.products.concat
      return {
        // the reducer must be a pure function
        // so we always need to remember to not MUTATE our parameter
        // the state we're given must not change
        ...state,
        cart: {
          ...state.cart,
          // products: state.cart.products.push(action.payload) // SUPER WRONG
          // this will lead to unexpected behavior in your redux store
          // products: state.cart.products.concat(action.payload) // THIS IS VALID
          products: [...state.cart.products, action.payload], // THIS IS VALID
        },
      }

    // case 'REMOVE_ITEM_FROM_CART':

    default:
      return state
  }
}

export default mainReducer
