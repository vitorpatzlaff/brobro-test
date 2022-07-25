// Este componentes é o menu da direita, onde há as categorias para filtragem

import { useState, KeyboardEvent, MouseEvent } from 'react'
import {
  Box,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { useCategories } from '../context/categories'
import MenuIcon from '@mui/icons-material/Menu'

function Filter () : JSX.Element {
  const [open, setOpen] = useState<boolean>(false)
  const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false)
  const { categories, chosenCategory } = useCategories()

  if (!categories) {
    return <></>     
  }

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent): undefined => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
      (event as KeyboardEvent).key === 'Shift')
      // Esta verificação achei na documentação do Material UI. Achei interessante, pois, se o usuário quiser navegar pelo 'Tab' e 'Shift', ele consegue, se ele apertar outra
      // tecla, o Drawer é recolhido.
    ) {
      return
    }

    setOpen(open)
  }

  function handleSelectedCategory (e: any): void {
    setIsCategorySelected(true)
    chosenCategory(e.target.innerText)
  }

  function handleClearCategory (): void {
    setIsCategorySelected(false)
    chosenCategory(null)
  }

  const FilterList = () => {
    return (
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem key='title'>
            <ListItemText primary='Categorías' />
          </ListItem>
          <Divider />
          {categories.map((text: string) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleSelectedCategory}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          {isCategorySelected && (
            <>
              <Divider />
              <ListItemButton onClick={handleClearCategory}>
                <ListItemText primary='Mostrar todo' />
              </ListItemButton>
            </>
          )}
        </List>
      </Box>
    )
  }

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} color='inherit'><MenuIcon /></IconButton>
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
      >
        <FilterList />  
      </Drawer>
    </>
  )
}

export default Filter
