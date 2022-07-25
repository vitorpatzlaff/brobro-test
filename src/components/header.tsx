// Este componente é o header da página. Eu fiz ele de uma maneira que pudesse ser expandido, isto é, se o projeto fosse maior, provavelmente não seria necessário muitas 
// mudanças.

import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MuiToolbar,
  Typography as MuiTypography
} from '@mui/material'
import Filter from './filter'

function Header () {

  return (
    <AppBar>
      <Toolbar>
        <Typography>Rexona Store</Typography>
        <Filter />
      </Toolbar>
    </AppBar>
  )
}

export default Header

const Toolbar = styled(MuiToolbar)`
  margin: 0 auto;
  width: 80%;
  height: 85px;
  display: flex;
  justify-content: space-between;

  @media screen and (orientation: portrait) {
    height: 60px;
    width: 90%;
  }
`

const Typography = styled(MuiTypography).attrs({
  variant: 'h2'
})`
  @media screen and (orientation: portrait) {
    font-size: 25px;
  }
`
