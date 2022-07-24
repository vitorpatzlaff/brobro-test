import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MuiToolbar,
  Typography
} from '@mui/material'
import Filter from './filter'

function Header () {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h2'>Brooklin Brothers Test</Typography>
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
`
