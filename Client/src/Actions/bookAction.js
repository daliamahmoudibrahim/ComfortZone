import axios from 'axios'
export const getAllBooks = ()=> dispatch =>{
   dispatch({type:'GET_BOOKS_REQUEST'})
    axios
      .get('http://127.0.0.1:8000/books/getallBooks')
      .then((res) => {
        console.log(res)
        // setBooks(res.data)
        dispatch({ type: 'GET_BOOKS_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: 'GET_BOOKS_FAILED', payload: err })
      })
}
export const getBookByID = (bookId) => (dispatch) => {
  dispatch({ type: 'GET_BOOKById_REQUEST' })
  axios
    .post(
      'http://127.0.0.1:8000/books/getBookById',
      {bookId}
    )
    .then((res) => {
      console.log('sucessfule the get book by id' , bookId)
      // setBooks(res.data)
      dispatch({ type: 'GET_BOOKById_SUCCESS', payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: 'GET_BOOKById_FAILED', payload: err })
    })
}