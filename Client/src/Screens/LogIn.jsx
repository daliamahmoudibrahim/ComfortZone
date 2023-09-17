import React from 'react'
import img from '../img/book.jpg'
import Nav from '../Component/Nav'
import style from './LogIn.module.css'
function LogIn() {
  return (
    <>
      <Nav />
      <div className={style.logIn}>
        {/* <div className={style.formContainer}> */}
          <form action="" className={style.form}>
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="PassWord" />
            <button>Log In</button>
          </form>
        {/* </div> */}
        <div className={style.img}>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  )
}

export default LogIn