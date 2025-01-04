import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  console.log("ORDERS: ", context.order?.slice(-1)[0])
    return (
      <Layout>
        <div className='flex w-80 items-center justify-center relative mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon
              className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          
          <h1>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
      </Layout>
    )
  }

  
  export default MyOrder;