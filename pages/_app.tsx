// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout'
import { CategoriesProvider } from '../src/context/categories'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CategoriesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CategoriesProvider>
  ) 
}

export default MyApp
