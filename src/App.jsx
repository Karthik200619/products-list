import React from 'react'
import Products from './components/Products'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div className='flex justify-center' >
        <Products />
      </div>
    </div>
  )
}

export default App