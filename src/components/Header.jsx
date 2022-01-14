import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({ open }) => {
  const { price } = useSelector((state) => state.cart)
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <Link to="/">
              <div className="headerLeft">
                <img width={80} max-height={40} src="./img/logo.png" alt="" />
                <div className="headerInfo">
                  <h3>Салаты из малекул</h3>
                  <div className="sub-title">магазин лучших салатов</div>
                </div>
              </div>
            </Link>
            <div className="headerRight-inner">
              <ul className="headerRight">
                <li onClick={open}>
                  <img src="./img/cart.svg" alt="cart" />
                  <span>{price}$</span>
                </li>
                <li style={{ position: 'relative' }}>
                  <Link to="/selfmade">Создать свой салат</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
