import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'store'

export const AuthOnly = (props: any) => {
  const signIn = useSelector((state: RootState) => state.signIn)

  const navigate = useNavigate()

  useEffect(() => {
    if (!Object.keys(signIn.data).length && props.redirect) {
      navigate('/login')
    }
  }, [signIn.data])

  const checkAccess = () => {
    const userInfoKeys = Object.keys(signIn.data)

    if (userInfoKeys.length) {
      return true
    }

    return false
  }

  return checkAccess() ? props.children : null
}
