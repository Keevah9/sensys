import React from 'react'
import { Navbar } from '../components'
import {FooterBanner} from '../container'
import Head from 'next/head'

const Layouts = ({children}) => {
  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>SENSYS STORE</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer className='bg-yellow-300'>
        <FooterBanner />
      </footer>
    </div>
  )
}

export default Layouts
