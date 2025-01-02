
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'

function App() {

  return (
    <>
      <div className='bg-red-100'>
        <Home />   
        <MyAccount />   
        <MyOrder />   
        <MyOrders />   
        <Signin />   
        <NotFound />   
      </div>
    </>
  )
}

export default App
