import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Skills from './pages/Skills.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App