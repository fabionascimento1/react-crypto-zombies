import {lazy, Suspense} from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const Login = lazy(() => import('./pages/Login'))
const Main = lazy(() => import('./pages/Main'))

function App() {
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
