import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles'
import Home from './pages/Home'
import Colaborador from './pages/Colaborador'
import Visitante from './pages/Visitante'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/colaborador',
    element: <Colaborador />
  },
  {
    path: '/visitante',
    element: <Visitante />
  }
])

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
