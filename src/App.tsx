import {lazy, Suspense} from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { useAuth } from './resources/contexts'

const Login = lazy(() => import('./pages/Login'))
const Main = lazy(() => import('./pages/Main'))

function App() {
  const { address } = useAuth()
  console.warn('TODO: validar address antes de redirecionar para dentro do app', address)
  return (
   <BrowserRouter>
    <ul>
      <li><Link to="/">Main</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
    <Suspense fallback='Carregando ...'>
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      </Suspense>
   </BrowserRouter>
  )
}

export default App
