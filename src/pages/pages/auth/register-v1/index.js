// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'

//third party import
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { timeZone } from 'src/constants/timezone'
import { currency } from 'src/constants/currency'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const defaultValues = {
  email: '',
  lastName: '',
  password: '',
  firstName: ''
}

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  lastName: yup
    .string()
    .min(3, obj => showErrors('lastName', obj.value.length, obj.min))
    .required(),
  password: yup
    .string()
    .min(8, obj => showErrors('password', obj.value.length, obj.min))
    .required(),
  userName: yup
    .string()
    .min(3, obj => showErrors('userName', obj.value.length, obj.min))
    .required(),
  timeZone: yup.string().required('timeZone is required'),
  currency: yup.string().required('currency is required'),
  company: yup.string().required('company is required'),
  checkbox: yup.boolean().required('You must agree to the terms and conditions')
})

const RegisterV1 = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

  // ** States
  const [state, setState] = useState({
    password: '',
    showPassword: false
  })
  const [data, setData] = useState('')

  // ** Hook
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const onSubmit = data => {
    console.log(JSON.stringify(data))
  }
  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg
              width={35}
              height={29}
              version='1.1'
              viewBox='0 0 30 23'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g id='Artboard' transform='translate(-95.000000, -51.000000)'>
                  <g id='logo' transform='translate(95.000000, 50.000000)'>
                    <path
                      id='Combined-Shape'
                      fill={theme.palette.primary.main}
                      d='M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z'
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646'
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162'
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='22.7419355 8.58870968 30 12.7417372 30 16.9537453'
                      transform='translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) '
                    />
                    <polygon
                      id='Rectangle'
                      opacity='0.077704'
                      fill={theme.palette.common.black}
                      points='22.7419355 8.58870968 30 12.6409734 30 15.2601969'
                      transform='translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) '
                    />
                    <path
                      id='Rectangle'
                      fillOpacity='0.15'
                      fill={theme.palette.common.white}
                      d='M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z'
                    />
                    <path
                      id='Rectangle'
                      fillOpacity='0.35'
                      fill={theme.palette.common.white}
                      transform='translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) '
                      d='M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              Our product
            </Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
              <Controller
                name='userName'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    register={register}
                    label='Username'
                    onChange={onChange}
                    sx={{ mb: 3 }}
                    placeholder='Leonard'
                    error={Boolean(errors.userName)}
                    aria-describedby='validation-schema-first-name'
                  />
                )}
              />
              {errors.userName && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-first-name'>
                  {errors.userName.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name='company'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    register={register}
                    label='Company'
                    onChange={onChange}
                    sx={{ mb: 3 }}
                    placeholder='company name'
                    error={Boolean(errors.company)}
                    aria-describedby='validation-schema-company'
                  />
                )}
              />
              {errors.company && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-company'>
                  {errors.company.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type='email'
                    value={value}
                    register={register}
                    label='Email'
                    sx={{ mb: 3 }}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    placeholder='carterleonard@gmail.com'
                    aria-describedby='validation-schema-email'
                  />
                )}
              />
              {errors.email && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-email'>
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel htmlFor='validation-schema-password' error={Boolean(errors.password)}>
                Password
              </InputLabel>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <OutlinedInput
                    value={value}
                    register={register}
                    label='Password'
                    sx={{ mb: 3 }}
                    onChange={onChange}
                    id='validation-schema-password'
                    error={Boolean(errors.password)}
                    type={state.showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          aria-label='toggle password visibility'
                        >
                          {state.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-password'>
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-helper-label' error={Boolean(errors.timeZone)}>
                TimeZone
              </InputLabel>

              <Controller
                name='timeZone'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <Select
                    sx={{ mb: 3 }}
                    value={value}
                    register={register}
                    onChange={onChange}
                    error={Boolean(errors.timeZone)}
                    label='timeZone'
                    defaultValue=''
                    id='demo-simple-select-helper'
                    labelId='demo-simple-select-helper-label'
                  >
                    {timeZone.map(item => (
                      <MenuItem key={item.code} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.timeZone && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-select'>
                  {errors.timeZone.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-helper-label' error={Boolean(errors.currency)}>
                currency
              </InputLabel>

              <Controller
                name='currency'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <Select
                    sx={{ mb: 3 }}
                    register={register}
                    value={value}
                    onChange={onChange}
                    error={Boolean(errors.currency)}
                    label='Currency'
                    defaultValue=''
                    id='demo-simple-select-helper'
                    labelId='demo-simple-select-helper-label'
                  >
                    {currency.map(item => (
                      <MenuItem key={item.abbr} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.currency && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-select'>
                  {errors.currency.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <Controller
                name='checkbox'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControlLabel
                    label={
                      <Fragment>
                        <span>I agree to </span>
                        <Link href='/' passHref>
                          <LinkStyled onClick={e => e.preventDefault()}>privacy policy & terms</LinkStyled>
                        </Link>
                      </Fragment>
                    }
                   
                    sx={errors.checkbox ? { color: 'error.main' } : null}
                    control={
                      <Checkbox
                        {...field}
                        name='validation-basic-checkbox'
                        sx={errors.checkbox ? { color: 'error.main' } : null}
                      />
                    }
                  />
                )}
              />
              {errors.checkbox && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-checkbox'>
                  This field is required
                </FormHelperText>
              )}
            </FormControl>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ mr: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/pages/auth/login-v1'>
                  <LinkStyled>Sign in instead</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}>or</Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link href='/' passHref>
                <IconButton component='a' onClick={e => e.preventDefault()}>
                  <Google sx={{ color: '#db4437' }} />
                  Login With Google
                </IconButton>
              </Link>
            </Box>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}
RegisterV1.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default RegisterV1
