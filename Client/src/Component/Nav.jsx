import React from 'react'
import './Nav.css'
 import ReactDOM from 'react-dom'
 import {useDispatch , useSelector} from 'react-redux'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons'
 import store from '../store'
import { addToCartReducer } from '../reducers/CartReducer'


export default function Nav() {
  
  const addToCartState = useSelector((state) => state.addToCartReducer)
  const { CartItems } = addToCartState



  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand nav-link" href="#">
          <h3>
            Comfort<span className="zone">Zone</span>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          pe="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                <FontAwesomeIcon icon={faCartShopping} />
                {CartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
