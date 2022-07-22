import styled from 'styled-components'
import {
  IconButton as MuiIconButton,
  AppBar,
  Toolbar as MuiToolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function Header () {
  

  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h2'>Brooklin Brothers Test</Typography>
        <IconButton color='inherit'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header

// const Container = styled(MuiContainer)`
//   width: 100%;
//   height: 100px;
//   background-color: #fc0;
//   text-align: center;
// `

const Toolbar = styled(MuiToolbar)`
  margin: 0 auto;
  width: 80%;
  height: 85px;
`

const IconButton = styled(MuiIconButton)`

`
