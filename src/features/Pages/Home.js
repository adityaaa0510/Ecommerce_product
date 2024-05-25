import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../product-list/component/ProductList'

function Home() {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home