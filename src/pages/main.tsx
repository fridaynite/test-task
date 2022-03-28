import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'store'

import { Container, Typography, Link } from '@mui/material'

export const MainPage = () => {
  const signIn = useSelector((state: RootState) => state.signIn)

  return (
    <Container maxWidth="xl">
      {signIn.data.name ? (
        <Typography
          variant="h5"
          color="primary"
          align="center"
          sx={{ mt: '50px' }}
        >
          Your name is {signIn.data.name}
        </Typography>
      ) : (
        <Link
          component={RouterLink}
          to="/profile"
          variant="h5"
          underline="hover"
          color="primary"
          sx={{ display: 'block', mx: 'auto', mt: '50px', width: 125 }}
        >
          Set a name
        </Link>
      )}
    </Container>
  )
}
