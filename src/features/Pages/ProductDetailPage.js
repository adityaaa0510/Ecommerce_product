import React from 'react'
import Navbar from '../navbar/Navbar'
import ProdectDetails from '../product-list/component/ProdectDetail'


function Home() {
  return (
    <div>
        <Navbar>
                <ProdectDetails/>
        </Navbar>
    </div>
  )
}

export default Home