// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../src/components/layout'
import { CategoriesProvider } from '../src/context/categories'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CategoriesProvider>
      <Head>
        <meta
          name='description'
          content='Productos Rexona. Contamos con antitranspirante en aerosol, alcohol en gel, jabón líquido, jabón y más...'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CategoriesProvider>
  ) 
}

export default MyApp
