import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Favoritepage from './Pages/Favoritepage'
import Homepage from './Pages/Homepage'
import Personal from './Pages/Personalpage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [myPurchases, setMyPurchases] = useState([])
  const [isOrdered, setIsOrdered] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [salads, setSalads] = useState([])
  const [molecules, setMolecules] = useState([])

  //Загрузка items
  useEffect(() => {
    async function getData() {
      try {
        setError('')
        setIsLoading(true)
        let salads = await axios
          .get('http://test-job.webatom.ru/salads')
          .then((res) => res.data.result)
        let molecules = await axios
          .get('http://test-job.webatom.ru/molecules')
          .then((res) => res.data.result)
        setIsLoading(false)
        setMolecules(molecules)
        setSalads(salads)
      } catch (err) {
        setIsLoading(false)
        setError(err.message)
        throw new Error(err.message)
      }
    }
    getData()
  }, [])

  // Добавления в корзину
  const addToCart = (obj) => {
    if (
      cartItems.filter((e) => e._id !== obj._id).length === cartItems.length
    ) {
      setCartItems((prev) => [...prev, obj])
    } else {
      setCartItems(cartItems.filter((e) => e._id !== obj._id))
    }
  }

  // Клики и инпуты

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id))
  }

  const handleCartClose = () => {
    setCartOpen(!cartOpen)
    setIsOrdered(false)
  }
  const handleBuy = () => {
    setMyPurchases((prev) => [...prev, ...cartItems])
    setCartItems([])
    setIsOrdered(true)
  }
  const handleClearPurchases = () => {
    setMyPurchases([])
  }

  //вычисление цены
  const price = () => {
    let res = cartItems.reduce((sum, cur) => sum + +cur, 0)
    return res
  }
  return (
    <div className="App">
      {error ? error : null}
      <div className="main-container">
        <Header
          myPurchases={myPurchases}
          open={handleCartClose}
          price={price()}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                molecules={molecules}
                items={salads}
                cartItems={cartItems}
                addToCart={addToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favoritepage cartItems={cartItems} addToCart={addToCart} />
            }
          />

          <Route
            path="/personal"
            element={
              <Personal
                handleClearPurchases={handleClearPurchases}
                myPurchases={myPurchases}
              />
            }
          />
        </Routes>

        {cartOpen ? (
          <Cart
            handleBuy={handleBuy}
            price={price()}
            cartItems={cartItems}
            handleRemoveCartItem={handleRemoveCartItem}
            close={handleCartClose}
            isOrdered={isOrdered}
          />
        ) : null}
      </div>
    </div>
  )
}

export default App
