import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { signOut } from 'features/login/slice'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Link,
} from '@mui/material'

export const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              typography: { xs: 'h6', md: 'h4' },
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              variant="inherit"
              underline="none"
              color="inherit"
            >
              LOGO
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                typography: { xs: 'subtitle2', md: 'button' },
              }}
            >
              <Link
                component={RouterLink}
                to="/profile"
                underline="none"
                color="inherit"
              >
                Profile
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={() => dispatch(signOut())}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
