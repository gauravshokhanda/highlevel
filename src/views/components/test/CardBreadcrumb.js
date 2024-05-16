// ** MUI Imports
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Breadcrumbs from '@mui/material/Breadcrumbs'

// ** Icons Imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FileOutline from 'mdi-material-ui/FileOutline'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import BookmarkOutline from 'mdi-material-ui/BookmarkOutline'

const CardBreadcrumb = () => {
  const handleClick = event => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <Card>
      <CardContent>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/' onClick={handleClick}>
            MUI
          </Link>
          <Link color='inherit' href='/' onClick={handleClick}>
            Core
          </Link>
          <Typography color='textPrimary'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs separator='-' aria-label='breadcrumb'>
          <Link color='inherit' href='/' onClick={handleClick}>
            MUI
          </Link>
          <Link color='inherit' href='/' onClick={handleClick}>
            Core
          </Link>
          <Typography color='textPrimary'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-label='breadcrumb' separator={<ChevronRight fontSize='small' />}>
          <Link color='inherit' href='/' onClick={handleClick}>
            MUI
          </Link>
          <Link color='inherit' href='/' onClick={handleClick}>
            Core
          </Link>
          <Typography color='textPrimary'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-label='breadcrumb' sx={{ mt: 2 }}>
          <Link color='inherit' href='/' onClick={handleClick} sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeOutline fontSize='small' />
            MUI
          </Link>
          <Link color='inherit' href='/' onClick={handleClick} sx={{ display: 'flex', alignItems: 'center' }}>
            <BookmarkOutline fontSize='small' />
            Core
          </Link>
          <Typography color='textPrimary' sx={{ display: 'flex', alignItems: 'center' }}>
            <FileOutline fontSize='small' />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </CardContent>
    </Card>
  )
}

export default CardBreadcrumb
