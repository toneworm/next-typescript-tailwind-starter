import React, { FunctionComponent } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      {children}
    </div>
  </div>
)

export default Layout
