import React from 'react'
import {Layouts} from '../container'
import '../styles/globals.css'
import {StateContext} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layouts>
        <Toaster />
        <Component {...pageProps} />
      </Layouts>
    </StateContext>
  );
}

export default MyApp
