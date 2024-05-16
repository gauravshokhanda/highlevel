import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import authConfig from 'src/configs/auth'
import { BASE_API } from 'config'

// ** Default Context Structure
const defaultProvider = {
  user: null,
  loading: true,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  setUser: () => {},
  setLoading: () => {},
  setIsInitialized: () => {}
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        try {
          const response = await axios.get(authConfig.meEndpoint, {
            headers: { Authorization: `Bearer ${storedToken}` }
          })
          setUser(response.data.userData)
        } catch (error) {
          localStorage.removeItem('userData')
          localStorage.removeItem(authConfig.storageTokenKeyName)
          setUser(null)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
      setIsInitialized(true)
    }

    initAuth()
  }, [])
  const handleLogin = async (credentials, errorCallback) => {
    if (credentials.password) {
      const response = await axios.post(`${BASE_API}/users/login`, {
        email: credentials.email,
        password: credentials.password
      })

      console.log(response, 'response')
      const token = response.data.token
      window.localStorage.setItem(authConfig.storageTokenKeyName, token)

      const userData = response.data.user
      setUser(userData)
      window.localStorage.setItem('userData', JSON.stringify(userData))

      const returnUrl = router.query.returnUrl || '/'
      router.replace(returnUrl)
      // try {
      //   const response = axios.post(`${BASE_API}/users/login`, {
      //     eamil: credentials.email,
      //     password: credentials.password
      //   })

      //   const token = response.data.token
      //   window.localStorage.setItem(authConfig.storageTokenKeyName, token)

      //   const userData = response.data.userData
      //   setUser(userData)
      //   window.localStorage.setItem('userData', JSON.stringify(userData))

      //   const returnUrl = router.query.returnUrl || '/'
      //   router.replace(returnUrl)
      // } catch (error) {
      //   if (errorCallback) errorCallback(error)
      // }
    }
  }

  const handleRegister = async (params, errorCallback) => {
    try {
      if (params.token) {
        await handleLogin({ email: params.email, password: params.password })
      }
    } catch (error) {
      if (errorCallback) errorCallback(error)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    isInitialized,
    setUser,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
