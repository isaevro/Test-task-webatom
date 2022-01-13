import React, { useState } from 'react'
import Card from '../components/Card'
import Skeleton from '../components/Skeleton'
const Homepage = ({
  items,
  cartItems,
  addToCart,
  isLoading,
  molecules,
  error,
}) => {
  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="title">
            <h1>{searchValue ? `поиск по ${searchValue}` : 'все салаты'}</h1>
            <h2>{error ? error : null}</h2>
            <div className="search">
              <img src="../img/search.svg" alt="search" />
              <input
                type="text"
                onChange={handleInput}
                value={searchValue}
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className="cards">
            {isLoading &&
              [...Array(10)].map((e, i) => (
                <div className="card" key={i}>
                  <Skeleton />
                </div>
              ))}

            {items
              .filter((e) =>
                e.title.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((item) => (
                <Card
                  discount_price={item.discount_price}
                  composition={item.composition}
                  molecules={molecules}
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  isCartAdded={cartItems.map((e) => e._id).includes(item._id)}
                  addToCart={() => addToCart(item)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
