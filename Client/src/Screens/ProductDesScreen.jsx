import React  ,{useEffect , useState}from 'react'
// import books from '../Books'
import {useDispatch , useSelector} from 'react-redux'
// import { getBookByIdReducer } from '../reducers/bookReducer';
import {getBookByID} from '../Actions/bookAction'
import { addToCart } from '../Actions/CartAction'
import { useParams } from 'react-router-dom'
import loadingImg from '.././img/loading.gif'
import style from './ProductDesScreen.module.css'


function ProductDesScreen() {
    const {id}= useParams();
    let [quantity, setQuantity] = useState(1);
    console.log(id);
    const getBookByIdState = useSelector((state) => state.getBookByIdReducer)
    let { loading, Book, error} = getBookByIdState
    const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getBookByID(id))
     }, [])
     
  const addToCartState = useSelector((state) => state.addToCartReducer)
  const { CartItems } = addToCartState

   function addToCart(){
         console.log(Book, quantity);
        dispatch(addToCart(Book, quantity))
      
   }
   

      console.log(Book);
  return (
    //   <>
    //   {loading ?<img src={loadingImg} alt="loading"  />
    //   : error
    //   ? <h1>something is wrong</h1> :<h1>{Book.name}</h1>}
    // </>
    <>
      {loading ? (
        <img src={loadingImg} alt="loading" />
      ) : error ? (
        <h1>something is wrong</h1>
      ) : (
        <>
          <div className={style.bookPage}>
            <div className={style.bookImage}>
              <img src={Book.image} alt={Book.name} />
            </div>
            <div className={style.bookInfo}>
              <h1>{Book.name}</h1>
              <h4 className={style.desc}>{Book.description}</h4>
              <h2 className="price">Price:{Book.price}LE</h2>
              <div className="addToCart">
                <h2>Select Quantity</h2>
                <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                  {[...Array(Book.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>
                  })}
                </select>
                <button className={style.btn} onClick={addToCart}>Add To Cart</button>
              </div>
              <h2>Give Your Review</h2>
              <form action="">
                <input type="text" />
                <button className={style.btn}>Add Review</button>
              </form>
              <h2>Lastest Reviews</h2>
              <div>
                {/* {Book.reviews.map(review => { return <><p>{review.review}</p> <h6>By:{review.by}</h6></>; })} */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )}

export default ProductDesScreen