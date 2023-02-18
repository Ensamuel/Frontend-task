import React from 'react'
import Header from './header/Header'
import './Firstpage.css'
import Middle from './Middle/Middle'

const Firstpage = () => {
  return (
    <div id='body' className='py-5'>
        <Header/>
        <Middle/>
    </div>
  )
}

export default Firstpage