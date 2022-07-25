// Este é um arquivo de configuração. O mais importante é a tag Layout, ele faz com que o meu header sempre exista, mesmo que eu vá para outra página. Imagina se houvesse uma
// página de checkout, o header continua o mesmo, pode haver uma mudança, mas haverá um header com a mesma logo ou algo assim

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
