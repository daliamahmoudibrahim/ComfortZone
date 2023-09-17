export const addToCart =(Book,quantity)=>dispatch=>{

    let CartItem ={
        name:Book.name,
        _id:Book._id,
        price:Book.price,
        countInStock:Book.countInStock,
        quantity:quantity
    }

    dispatch({type:'ADD_TO_CART', payload:CartItem})
}