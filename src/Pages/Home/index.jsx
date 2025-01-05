import { useState, useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    console.log("searchByTitle: ", context.searchByTitle)
    if (context.searchByTitle?.length > 0 || context.setSearchByCategory?.length > 0) {
      if(context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div className='font-bold text-6xl whitespace-nowrap'> Products Not Found! :( </div>
        )
      }
      
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

    return (
      <Layout>
        <div className='flex w-80 items-center justify-center relative mb-4'>
          <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder='Search a product By Title' 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        <input 
          type="text" 
          placeholder='Search a product By Category' 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByCategory(event.target.value)}/>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail  />
      </Layout>
    )
  }
  
  export default Home