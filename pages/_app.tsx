import React from 'react'
import { AppProps } from 'next/app'
// import Router from 'next/router'
// import { MyContext } from '../context/MyContext'
import '../src/index.scss'

function _App({ Component, pageProps }: AppProps) {
  return (
    // <MyContext.Provider value={pageProps}>
      <Component {...pageProps} />
    // </MyContext.Provider>
  )
}

// Router.onRouteChangeComplete = () => {
//   if (process.env.NODE_ENV !== 'production') {
//     const el = document.querySelector('link[href*="/_next/static/css/styles.chunk.css"]')
//     el.href = `/_next/static/css/styles.chunk.css?v=${new Date().valueOf()}`
//   }
// }

// _App.getInitialProps = async () => {
//   if (process.browser) {
//     return { pageProps: __NEXT_DATA__.props.pageProps }
//   }

//   const data = await fetchSomeData()
  
//   return { pageProps: data }
// }

export default _App