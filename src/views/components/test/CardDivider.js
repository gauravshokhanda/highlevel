// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardDivider = () => {
  return (
    <Card>
      <CardContent>
        <Typography>Simple Divider</Typography>
        <Divider />
        <Typography>Light Divider (below)</Typography>
        <Divider light />
        <Box sx={{ display: 'flex' }}>
          <Typography>Vertical</Typography>
          <Divider flexItem orientation='vertical' sx={{ m: theme => theme.spacing(0.25, 0, 0.25, 4) }} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardDivider
