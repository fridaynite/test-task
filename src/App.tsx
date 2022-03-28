import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthOnly } from 'hoc/auth'

import { LoginPage } from 'pages/login'
import { MainPage } from 'pages/main'
import { ProfilePage } from 'pages/profile'

import { Navbar } from 'features/navbar'

function App() {
  return (
    <Router>
      <AuthOnly>
        <Navbar />
      </AuthOnly>

      <Routes>
        <Route
          path="/"
          element={
            <AuthOnly redirect="login">
              <MainPage />
            </AuthOnly>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthOnly redirect="login">
              <ProfilePage />
            </AuthOnly>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
