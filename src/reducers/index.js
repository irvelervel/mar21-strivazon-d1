import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'ADD_ITEM_TO_CART':

    // case 'REMOVE_ITEM_FROM_CART':

    default:
      return state
  }
}

export default mainReducer
