import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Typography,
  Button,
  CssBaseline,
  TextField,
  Box,
} from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { updateName } from 'features/login/slice'

const theme = createTheme()

export function ProfilePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    dispatch(updateName(data.get('username')))

    if (localStorage.user) {
      localStorage.user = JSON.stringify({
        ...JSON.parse(localStorage.user),
        name: data.get('username'),
      })
    } else {
      localStorage.user = JSON.stringify({
        name: data.get('username'),
      })
    }

    navigate('/')
  }

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
          <Typography component="h1" variant="h5">
            Enter your name
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
