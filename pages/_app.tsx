import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        h1,h2,h3,h4,h5,h6 {
          margin: 0;
        }
        li {
          list-style: none;
        }
      `}</style>
    </Layout>
  )
}

export default MyApp
