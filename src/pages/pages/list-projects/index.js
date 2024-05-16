// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'

import Grid from '@mui/material/Grid'

//icons
import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

// ** Styled Components

const ListProjects = () => {
  // Styled Grid component
  const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }))

  // Styled component for the image
  const Img = styled('img')(({ theme }) => ({
    height: '11rem',
    borderRadius: theme.shape.borderRadius
  }))

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className='content-right' p={4}>
      <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card>
          <Grid container spacing={1}>
            <StyledGrid item md={5} xs={12}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={137} height={176} alt='Apple iPhone 11 Pro' src='/images/cards/iPhone-11-pro.png' />
              </CardContent>
            </StyledGrid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                pt: ['0 !important', '0 !important', '1.5rem !important'],
                pl: ['1.5rem !important', '1.5rem !important', '0 !important']
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ mb: 2 }}>
                  Create New Project
                </Typography>
                <Typography variant='body2' sx={{ mb: 3.5 }}>
                  Avail free credits on your account to create new projects.
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label='New Project'
                    variant='outlined'
                    placeholder='creat new project '
                  />
                </Typography>

                <Typography variant='body' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <Button variant='contained' sx={{ p: theme => theme.spacing(1.75, 5.5) }}>
                    Create
                  </Button>
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  p: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                }}
              >
                <Typography variant='body2' sx={{ mb: 6 }}>
                  gaurav
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={5}>
                    <StyledBox>
                      <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                        <LockOpenOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                        <Typography variant='body2'>Full Access</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                        <Typography variant='body2'>15 Members</Typography>
                      </Box>
                    </StyledBox>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      <StarOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                      <Typography variant='body2'>Access all Features</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                      <Typography variant='body2'>Lifetime Free Update</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Button variant='contained'>View</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  p: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                }}
              >
                <Typography variant='body2' sx={{ mb: 6 }}>
                  gaurav
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={5}>
                    <StyledBox>
                      <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                        <LockOpenOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                        <Typography variant='body2'>Full Access</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                        <Typography variant='body2'>15 Members</Typography>
                      </Box>
                    </StyledBox>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      <StarOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                      <Typography variant='body2'>Access all Features</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                      <Typography variant='body2'>Lifetime Free Update</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Button variant='contained' sx={{ p: theme => theme.spacing(1.75, 5.5) }}>
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  p: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                }}
              >
                <Typography variant='body2' sx={{ mb: 6 }}>
                  gaurav
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={5}>
                    <StyledBox>
                      <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                        <LockOpenOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                        <Typography variant='body2'>Full Access</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                        <Typography variant='body2'>15 Members</Typography>
                      </Box>
                    </StyledBox>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      <StarOutline sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                      <Typography variant='body2'>Access all Features</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: 'primary.main', mr: 2.75 }} fontSize='small' />
                      <Typography variant='body2'>Lifetime Free Update</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Button variant='contained' sx={{ p: theme => theme.spacing(1.75, 5.5) }}>
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
ListProjects.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ListProjects
