
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import Layout from './Layout'
function App() {


  return (
    <ThemeProvider>
      <CartProvider>
        
        <main className='min-h-screen'>
          <Layout />
        </main>
        
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
