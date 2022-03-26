import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'store'

export const AuthOnly = (props: any) => {
  const signIn = useSelector((state: RootState) => state.signIn)

  const navigate = useNavigate()

  const checkAccess = () => {
    const userInfoKeys = Object.keys(signIn.data)

    if (userInfoKeys.length) {
      return true
    }

    return false
  }

  if (props.redirect) {
    if (checkAccess()) {
      return props.children
    }
    if (!checkAccess()) {
      navigate(props.redirect)
    }
  }

  return checkAccess() ? props.children : null
}
