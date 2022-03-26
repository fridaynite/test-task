import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { signIn } from 'features/login/slice'

import {
  Container,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Alert,
} from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { RootState } from 'store'

import { useNavigate } from 'react-router-dom'

interface FormState {
  email: string
  password: string
  remember: boolean
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password should be of minimum 3 characters length')
    .required('Password is required'),
})

export const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = createTheme()

  const signInSlice = useSelector((state: RootState) => state.signIn)

  useEffect(() => {
    if (Object.keys(signInSlice.data).length) {
      navigate('/')
    }
  }, [signInSlice.data, navigate])

  const handleChange = (values: FormState) => {
    const { email, password, remember } = values

    const data = {
      email,
      password,
      remember,
    }

    dispatch(signIn(data))
  }

  const formik = useFormik({
    initialValues: {
      email: 'johndoe@gmail.com',
      password: 'qwerty',
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleChange,
  })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {signInSlice.error && (
              <Alert severity="error">{signInSlice.error}</Alert>
            )}
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="remember"
                  name="remember"
                  color="primary"
                  value={formik.values.remember}
                  onChange={formik.handleChange}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
