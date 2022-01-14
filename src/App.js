import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import { SelfMadepage } from './Pages/SelfMadepage'
import { fetchItems } from './redux'

import { useDispatch } from 'react-redux'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const dispatch = useDispatch()

  //Загрузка items
  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const handleCartClose = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className="App">
      <div className="main-container">
        <Header open={handleCartClose} />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/selfmade" element={<SelfMadepage />} />
        </Routes>

        {cartOpen ? (
          <Cart close={handleCartClose}   />
        ) : null}
      </div>
    </div>
  )
}

export default App
