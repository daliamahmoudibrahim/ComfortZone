export const getAllBooksReducer =(state={Books :[]}, action)=>{

    switch (action.type) {
      case 'GET_BOOKS_REQUEST':
        return {
          loading: true,
        }
      case 'GET_BOOKS_SUCCESS':
        return {
          loading: false,
          Books: action.payload,
        }
      case 'GET_BOOKS_FAILED':
        return {
            loading: false,
            error:action.payload
        }
      default: return state
    }
}
export const getBookByIdReducer = (state = {Book:[]}, action) => {
  switch (action.type) {
    case 'GET_BOOKById_REQUEST':
      return {
        loading: true,
      }
    case 'GET_BOOKById_SUCCESS':
      return {
        loading: false,
        Book: action.payload,
      }
    case 'GET_BOOKById_FAILED':
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}