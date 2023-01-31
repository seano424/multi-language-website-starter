import { Html, Head, Main, NextScript } from 'next/document'
import clsx from 'clsx'

export default function Document() {
  const devMode = process.env.NODE_ENV === 'development'
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body
        className={clsx(
          'overflow-x-hidden antialiased',
          devMode && 'debug-screens'
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
