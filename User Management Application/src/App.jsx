import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddUserPage from './pages/AddUserPage'
import EditUserPage from './pages/EditUserPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <header className='topbar'>
          <div className='container topbar-inner'>
            <Link to='/' className='brand'>
              User Admin
            </Link>
            <nav className='nav'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
              <a
                href='https://jsonplaceholder.typicode.com/'
                target='_blank'
                rel='noreferrer'
                className='nav-link'
              >
                API Docs
              </a>
            </nav>
          </div>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add-user' element={<AddUserPage />} />
            <Route path='/edit-user/:id' element={<EditUserPage />} />
          </Routes>
        </main>
        <footer className='footer'>
          <div className='container footer-inner'>
            <p>© {new Date().getFullYear()} User Admin</p>
            <p className='muted'>React • TypeScript • React Router • Axios</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
