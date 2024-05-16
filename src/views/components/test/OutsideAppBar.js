// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'

const OutsideAppBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' sx={{ mr: 2.5 }} color='inherit' aria-label='menu'>
          <Menu />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1, color: 'common.white' }}>
          News
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default OutsideAppBar
