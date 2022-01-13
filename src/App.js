import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import Personal from './Pages/Personalpage'
import { SelfMadepage } from './Pages/SelfMadepage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [myPurchases, setMyPurchases] = useState([])
  const [isOrdered, setIsOrdered] = useState(false)

  const [isOrderLoading, setIsOrderLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [salads, setSalads] = useState([])
  const [molecules, setMolecules] = useState([])

  // отправка запроса на покупку и обработка ошибок
  const handleBuy = () => {
    async function postBuy() {
      try {
        setIsOrderLoading(true)
        setError('')
        setCartItems([])
        let res = await axios.post('http://test-job.webatom.ru/order', {
          order: cartItems,
        })
        if (res.data.success) {
          console.log(!res.data.success)
          setIsOrderLoading(false)
          setMyPurchases((prev) => [...prev, ...cartItems])
          setIsOrdered(true)
        } else {
          throw new Error('Неуспешный ответ от сервера')
        }
      } catch (err) {
        setIsOrderLoading(false)
        setCartItems([])
        console.log(err)
        setError(err.message)
      }
    }
    postBuy()
  }

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

  const handleClearPurchases = () => {
    setMyPurchases([])
  }
  //вычисление цены
  const price = () => {
    let res = cartItems
      .map((e) => e.discount_price)
      .reduce((sum, cur) => sum + +cur, 0)
    return Math.round(res * 100) / 100
  }
  return (
    <div className="App">
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
                error={error}
                molecules={molecules}
                items={salads}
                cartItems={cartItems}
                addToCart={addToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/selfmade"
            element={<SelfMadepage addToCart={addToCart} />}
          />

          {/* <Route
            path="/personal"
            element={
              <Personal
                handleClearPurchases={handleClearPurchases}
                myPurchases={myPurchases}
              />
            }
          /> */}
        </Routes>

        {cartOpen ? (
          <Cart
            isOrderLoading={isOrderLoading}
            error={error}
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
