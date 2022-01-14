import { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Molecule from '../components/Molecule'
import Skeleton from '../components/Skeleton'

export const SelfMadepage = () => {
  const [myComposition, setMyComposition] = useState([])
  const [price, setPrice] = useState(0)
  const { molecules, isLoading, error } = useSelector((state) => state.items)
  const { cartItems } = useSelector((state) => state.cart)
  const handleAddToMySalad = (molecule) => {
    if (
      myComposition.filter((e) => e !== molecule.id).length ===
      myComposition.length
    ) {
      setMyComposition((prev) => [...prev, molecule.id])
      setPrice(price + molecule.price)
    } else {
      setMyComposition(myComposition.filter((e) => e !== molecule.id))
      setPrice(price - molecule.price)
    }
  }
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
                discount_price={price}
                composition={myComposition}
                molecules={molecules}
                id={123}
                price={price}
                isCartAdded={cartItems.map((e) => e.id).includes(123)}
              />
              <div>
                <ul>
                  {molecules
                    .filter((molecule) => molecule.qty > 0)
                    .map((molecule) => (
                      <Molecule
                        key={molecule._id}
                        molecule={molecule}
                        myComposition={myComposition}
                        handleAddToMySalad={handleAddToMySalad}
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
