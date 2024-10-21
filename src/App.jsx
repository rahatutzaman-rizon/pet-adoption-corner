
import { useContext } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { AuthContext } from './contexts/AuthProvider'
import Navbar from './pages/shared/Navbar'
import FooterMain from './pages/shared/FooterMain'

function App() {

  const {user} = useContext(AuthContext)
  return (
    <div>

<div className=''>
    <Navbar/>
    </div>
     
      <div className='min-h-screen '>
      <Outlet/>
      </div>
      <FooterMain/>
    </div>
    
   
  )
}

export default App
