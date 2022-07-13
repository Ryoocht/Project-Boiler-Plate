import { Outlet} from 'react-router-dom'
import { Login } from '../pages/pages'

const useAuth = () => {
    const user = false
    if (user) return true
    return false
}

export const AuthRequiredRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Login/>
}

export const NotAuthRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Login /> : <Outlet/>
}