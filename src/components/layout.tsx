// Como disse o _app.tsx, este componente renderiza o Header e as outras pagina em uma tag <main>.

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
