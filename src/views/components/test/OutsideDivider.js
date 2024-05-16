// ** MUI Imports
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

const OutsideDivider = () => {
  return (
    <div>
      <Typography>Simple Divider</Typography>
      <Divider />
      <Typography>Light Divider (below)</Typography>
      <Divider light />
      <Box sx={{ display: 'flex' }}>
        <Typography>Vertical</Typography>
        <Divider flexItem orientation='vertical' sx={{ m: theme => theme.spacing(0.25, 0, 0.25, 4) }} />
      </Box>
    </div>
  )
}

export default OutsideDivider
