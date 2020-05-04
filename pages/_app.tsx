// import { LeagueDataContext } from '../context/LeagueDataContext'
import React, { FunctionComponent } from 'react'
// import Router from 'next/router'
// import { fetchTeamData } from '../utils/api'
import './index.scss'

type Props = {
  Component: FunctionComponent,
  pageProps: any
}

function _App({ Component, pageProps }: Props) {
  return (
    // <LeagueDataContext.Provider value={pageProps}>
      <Component {...pageProps} />
    // </LeagueDataContext.Provider>
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

//   const data = await fetchTeamData()
  
//   return { pageProps: data }
// }

export default _App