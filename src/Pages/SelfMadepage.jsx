import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Molecule from '../components/Molecule'
import Skeleton from '../components/Skeleton'
import { removeCartItem } from '../redux'

export const SelfMadepage = () => {
  const { molecules, isLoading, error } = useSelector((state) => state.items)
  const { cartItems } = useSelector((state) => state.cart)
  const { price, discount_price, myComposition } = useSelector(
    (state) => state.selfMade,
  )

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="title">
            <h1>Собери свой салат</h1>
            <h2>{error ? error : null}</h2>
          </div>
          {isLoading && (
            <div className="cards">
              {[...Array(1)].map((e, i) => (
                <div className="card" key={i}>
                  <Skeleton />
                </div>
              ))}
            </div>
          )}
          {!isLoading && !error && (
            <div className="cards">
              <Card
                title={'My Salad'}
                discount_price={discount_price}
                composition={myComposition}
                molecules={molecules}
                id={'My Salad'}
                price={price}
                isCartAdded={cartItems.map((e) => e.id).includes('My Salad')}
              />
              <div>
                <ul>
                  {molecules
                    .filter((molecule) => molecule.qty > 0)
                    .map((molecule) => (
                      <Molecule
                        key={molecule._id}
                        myComposition={myComposition}
                        molecule={molecule}
                      />
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
