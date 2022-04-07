import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />

      <style jsx global>{`
        :root {
          --blue-1 : #008cff;
        }

        h1,h2,h3,h4,h5,h6 {
          margin: 0;
        }

        button {
          cursor: pointer;
          border: 0;
        }

        ul,li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </Layout>
  )
}

export default MyApp
