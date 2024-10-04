import App from './App.jsx'
import About from './components/About.jsx'
/* react routing */
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
 {path: '/', element: <App/>},
 {path: '/about',  element: <About/>}
])

export default router