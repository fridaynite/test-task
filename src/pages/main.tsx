import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'store'

export const MainPage = () => {
  const signIn = useSelector((state: RootState) => state.signIn)

  return (
    <div>
      {signIn.data.name ? (
        `Your name is ${signIn.data.name}`
      ) : (
        <Link to="/profile">Задать имя</Link>
      )}
    </div>
  )
}
