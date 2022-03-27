import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthOnly } from 'hoc/auth'

import { LoginPage } from 'pages/login'
import { MainPage } from 'pages/main'
import { ProfilePage } from 'pages/profile'

import { Navbar } from 'features/navbar'

function App() {
  return (
    <>
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
      {/*<Router>
        <AuthOnly>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                {signIn.data.name || <Link to="/profile">Задать имя</Link>}
              </li>
              <li>
                <button onClick={() => dispatch(signOut())}>Log out</button>
              </li>
            </ul>
          </nav>
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
          </Router>*/}
    </>
  )
}

export default App
