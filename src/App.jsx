import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Conatato'
import Produtos from './pages/Produtos'
import NavBar from './components/NavBar'

function App() {
  return (
      <nav className='App'>
        <h1>ContextApi</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/'  element={<Home />}/>
            <Route path='/contatos'  element={<Contato />}/>
            <Route path='/produtos'  element={<Produtos />}/>
          </Routes>
        </BrowserRouter>
      </nav>
  )
}

export default App
