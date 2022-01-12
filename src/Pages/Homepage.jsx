import React, { useState } from 'react'
import ContentLoader from 'react-content-loader'
import Card from '../components/Card'
const Homepage = ({ items, cartItems, addToCart, isLoading, molecules }) => {
  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="title">
            <h1>{searchValue ? `поиск по ${searchValue}` : 'все кроссовки'}</h1>

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
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={271}
                    viewBox="0 0 205 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="37" y="30" rx="0" ry="0" width="142" height="83" />
                    <rect
                      x="37"
                      y="144"
                      rx="0"
                      ry="0"
                      width="142"
                      height="13"
                    />
                    <rect
                      x="37"
                      y="159"
                      rx="0"
                      ry="0"
                      width="142"
                      height="15"
                    />
                    <rect x="37" y="200" rx="0" ry="0" width="34" height="11" />
                    <rect x="37" y="215" rx="0" ry="0" width="83" height="14" />
                    <rect
                      x="147"
                      y="200"
                      rx="0"
                      ry="0"
                      width="30"
                      height="29"
                    />
                  </ContentLoader>
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
