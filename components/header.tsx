import { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Drawer,
  Toolbar as MuiToolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function Header () {
  const [sideOpen, setSideOpen] = useState<{ right: boolean }>({ right: false })

  // const toggleDrawer

  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h2'>Brooklin Brothers Test</Typography>

        <Button onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
        <Drawer
          anchor='right'
          open={anchor}
        >

        </Drawer>
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
  display: flex;
  justify-content: space-between;
`
