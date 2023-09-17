export const addToCartReducer=(state={CartItems:[]},action)=>{
  switch(action.type){
    case 'ADD_TO_CART':{
         return{
            ...state,
           CartItems:[...state.CartItems , action.payload]
        }
    }
    default:{
        return state
    }
        
  }
}