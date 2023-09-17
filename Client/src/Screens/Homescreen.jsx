import React from 'react'
// import books from '../Books'
import './Homescreen.css'
import Book from '../Component/Book'
import {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getAllBooks } from '../Actions/bookAction'
import  {getAllBooksReducer} from '../reducers/bookReducer'
import loadingImg from '.././img/loading.gif'


export default function HomeScreen() {


  const getAllBookState = useSelector((state) => state.getAllBooksReducer)
  const dispatch = useDispatch();
  const {loading , Books, err} = getAllBookState;

useEffect(()=>{
         dispatch(getAllBooks())
},[])
  return (
    <>
      <div className="flex">
        {loading ? (
          <img src={loadingImg} alt="loading" />
        ) : err ? (
          <h1>something is wrong</h1>
        ) : (
          <div className='books' >
            {Books.map((book) => {
              return <Book book={book} key={book._id} />
            })}
          </div>
        )}
      </div>
    </>
  )
}
