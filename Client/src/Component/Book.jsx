import React from 'react'
import '../Screens/Homescreen'
import {Link} from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import './Book.css'
function Book({book}) {
  return (
    <Link to={`books/${book._id}`} className='link'>
      <div className="book">
        <div className="img-container">
          <img src={book.image} alt={book.name} className="img" />
        </div>
        <h3 className="title">{book.name}</h3>
        <StarRatings
          rating={book.rating}
          starRatedColor="bisque"
          starEmptyColor="gray"
          starDimension="30px"
          starSpacing="2px"
        />
        <p className="price">price: {book.price} L.E</p>
      </div>
    </Link>
  )
}

export default Book
