// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardHeader from '@mui/material/CardHeader'
import FilledInput from '@mui/material/FilledInput'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import AccountCircleOutline from 'mdi-material-ui/AccountCircleOutline'

const TextFieldIcons = () => {
  return (
    <Card>
      <CardHeader title='Icons' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form className='demo-space-x' noValidate autoComplete='off'>
          <FormControl>
            <InputLabel>With a start adornment</InputLabel>
            <OutlinedInput
              label='With a start adornment'
              startAdornment={
                <InputAdornment position='start'>
                  <AccountCircleOutline />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            label='TextField'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircleOutline />
                </InputAdornment>
              )
            }}
          />
          <Box sx={{ display: 'inline-flex' }}>
            <Grid container spacing={2} alignItems='flex-end'>
              <Grid item>
                <AccountCircleOutline sx={{ color: theme => theme.palette.action.active }} />
              </Grid>
              <Grid item>
                <TextField label='With a grid' />
              </Grid>
            </Grid>
          </Box>
        </form>

        <form className='demo-space-x' noValidate autoComplete='off'>
          <FormControl variant='filled'>
            <InputLabel>With a start adornment</InputLabel>
            <FilledInput
              startAdornment={
                <InputAdornment position='start'>
                  <AccountCircleOutline />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            label='TextField'
            variant='filled'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircleOutline />
                </InputAdornment>
              )
            }}
          />
          <Box sx={{ display: 'inline-flex' }}>
            <Grid container spacing={2} alignItems='flex-end'>
              <Grid item>
                <AccountCircleOutline sx={{ color: theme => theme.palette.action.active }} />
              </Grid>
              <Grid item>
                <TextField variant='filled' label='With a grid' />
              </Grid>
            </Grid>
          </Box>
        </form>

        <form className='demo-space-x' noValidate autoComplete='off'>
          <FormControl variant='standard'>
            <InputLabel>With a start adornment</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position='start'>
                  <AccountCircleOutline />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            label='TextField'
            variant='standard'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircleOutline />
                </InputAdornment>
              )
            }}
          />
          <Box sx={{ display: 'inline-flex' }}>
            <Grid container spacing={2} alignItems='flex-end'>
              <Grid item>
                <AccountCircleOutline sx={{ color: theme => theme.palette.action.active }} />
              </Grid>
              <Grid item>
                <TextField variant='standard' label='With a grid' />
              </Grid>
            </Grid>
          </Box>
        </form>
      </CardContent>
    </Card>
  )
}

export default TextFieldIcons
