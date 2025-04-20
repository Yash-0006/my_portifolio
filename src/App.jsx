import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App