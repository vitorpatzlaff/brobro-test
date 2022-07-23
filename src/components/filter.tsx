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
import MenuIcon from '@mui/icons-material/Menu'

function Filter () {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent): undefined => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
      (event as KeyboardEvent).key === 'Shift') 
    ) {
      return
    }

    setOpen(open)
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
            <ListItemText primary='Filter' />
          </ListItem>
          <Divider />
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
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