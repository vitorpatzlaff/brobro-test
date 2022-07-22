import { NextPage } from 'next'
import Header from './header'

function Layout({ children }: any){
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
