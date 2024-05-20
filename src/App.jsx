import { useState } from 'react'
import Home from './pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './components/rootlayout/RootLayout'
import ShopTwo from './pages/ShopTwo'
import ProductDetails from './components/shoptwo/ProductDetails'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/shoptwo' element={<ShopTwo/>}></Route>
    <Route path='/shoptwo/:id' element={<ProductDetails/>}></Route>
  </Route>
))


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
