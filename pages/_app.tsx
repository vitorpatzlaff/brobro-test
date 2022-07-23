// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout'
import { DataProvider } from '../src/context/data'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  ) 
}

export default MyApp
