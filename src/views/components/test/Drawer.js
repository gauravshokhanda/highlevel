// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

// ** Icons Imports
import StarOutline from 'mdi-material-ui/StarOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import InboxArrowDown from 'mdi-material-ui/InboxArrowDown'
import InformationOutline from 'mdi-material-ui/InformationOutline'

const DrawerComponent = () => {
  // ** State
  const [open, setOpen] = useState(false)

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpen(open)
  }

  return (
    <div>
      <Button variant='outlined' onClick={toggleDrawer(true)}>
        Left
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box role='presentation' sx={{ width: 260 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxArrowDown />
                </ListItemIcon>
                <ListItemText primary='Index' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarOutline />
                </ListItemIcon>
                <ListItemText primary='Starred' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteOutline />
                </ListItemIcon>
                <ListItemText primary='Trash' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InformationOutline />
                </ListItemIcon>
                <ListItemText primary='Spam' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default DrawerComponent
