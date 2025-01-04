import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  
    return (
      <Layout>
        <div className='flex w-80 items-center justify-center relative'>
          
          <h1>My Orders</h1>
        </div>
        {
          context.order.map((order) => {
            <Link to={`/my-orders/${order.id}`}>
              <OrdersCard
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts} />
            </Link>
          })
        }
        <OrdersCard />
      </Layout>
    )
  }
  
  export default MyOrders