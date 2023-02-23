export const setProduct = (products) => ({
    type: 'SET_PRODUCT',
    payload: products
})

export const findProduct = (id) => ({
    type: 'FIND_PRODUCT',
    payload: id
})
