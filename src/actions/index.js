// here I write my action creators
// functions that return actions

export const addItemToCartAction = (book) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: book,
})
