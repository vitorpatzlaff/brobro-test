import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MuiToolbar,
  Typography as MuiTypography
} from '@mui/material'
import Filter from './filter'
import { useCategories } from '../context/categories'

function Header () {
  const { showElement } = useCategories()

  return (
    <AppBar>
      <Toolbar>
        <Typography display={showElement}>Rexona Store</Typography>
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
