import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import styled from 'styled-components'

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

const StyledTypography = styled(Typography)`
  margin-right: 15px;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 900px) {
    margin-right: 5px;
    font-size: 20px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 15px;
  color: white;
  margin-bottom: 15px;
  font-size: 17px;
  &:hover {
    color: #f1f1f1c5;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
`

export const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledTypography noWrap>
            <Link
              component={RouterLink}
              to="/"
              variant="inherit"
              underline="none"
              color="inherit"
            >
              LOGO
            </Link>
          </StyledTypography>

          <Box sx={{ flexGrow: 1 }}>
            <StyledButton>
              <Link
                component={RouterLink}
                to="/profile"
                underline="none"
                color="inherit"
              >
                Profile
              </Link>
            </StyledButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <StyledButton onClick={() => dispatch(signOut())}>
              Logout
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
