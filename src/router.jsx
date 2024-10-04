import App from './App.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
/* react routing */
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
 {path: '/', element: <App/>},
 {path: '/home', element: <Hero/>},
 {path: '/about',  element: <About/>}
])

export default router