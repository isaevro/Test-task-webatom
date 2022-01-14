import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { postingCartItems, removeCartItem } from '../redux'
const Cart = ({ close }) => {
  const { cartItems, price, error, isLoading, isOrdered } = useSelector(
    (state) => state.cart,
  )
  const dispatch = useDispatch()
  return (
    <div
      className="sidebar-wrapper"
      onClick={(e) => e.currentTarget === e.target && close()}>
      <div className="sidebar">
        <div className="sidebar-title">
          <h2>Корзина</h2>
          <img
            onClick={close}
            className="close-cart"
            src="./img/close.svg"
            alt="close"
          />
        </div>
        <div className="sidebar-top">
          <div className="card-side-items">
            {cartItems.map((item) => (
              <div className="card-side-item" key={item.id}>
                <div className="card-side-item-inner">
                  <img
                    width={70}
                    height={70}
                    className="sidebar-pic"
                    src="./img/salad.jpg"
                    alt="salad"
                  />
                  <div className="card-side-descr">
                    <p>{item.title}</p>
                    <b>{item.discount_price} $</b>
                  </div>
                  <img
                    onClick={() => dispatch(removeCartItem(item.id))}
                    className="close-pic"
                    src="./img/close.svg"
                    alt="close"
                  />
                </div>
              </div>
            ))}
            {cartItems.length === 0 && !isOrdered && !error && !isLoading && (
              <div style={{ paddingTop: '80px' }} className="no-items">
                <img
                  style={{ cursor: 'default' }}
                  width={70}
                  height={70}
                  src="./img/empty-cart.png"
                  alt=""
                />
                <h2>Здесь пока ничего нет :(</h2>
                <p>добавьте товар в корзину</p>
              </div>
            )}
            {isLoading && (
              <div style={{ paddingTop: '80px' }} className="no-items">
                <h2 style={{ color: '#9dd558' }}>
                  'идет обработка запроса...'
                </h2>
              </div>
            )}
            {cartItems.length === 0 && isOrdered && !error && !isLoading && (
              <div style={{ paddingTop: '80px' }} className="no-items">
                <img
                  style={{ cursor: 'default' }}
                  width={67}
                  height={97}
                  src="./img/complete.jpg"
                  alt="complete"
                />
                <h2 style={{ color: '#9dd558' }}>Спасибо за покупку! :)</h2>
                <p>Ваш заказ оформлен.</p>
              </div>
            )}

            {cartItems.length === 0 && error && (
              <div style={{ paddingTop: '80px' }} className="no-items">
                <h2 style={{ color: '#9dd558' }}>произошла ошибка</h2>
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-price">
            <b>Итого:</b>
            <div></div>
            <p>{price} $</p>
          </div>

          <button
            className="sidebar-submit"
            disabled={cartItems.length === 0 ? true : false}
            onClick={() => dispatch(postingCartItems())}>
            Оформить заказ
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 7H14.7143"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
