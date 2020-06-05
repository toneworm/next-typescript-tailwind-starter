import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}