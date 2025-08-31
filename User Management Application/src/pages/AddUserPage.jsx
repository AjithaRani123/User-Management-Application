import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import UserForm from '../components/users/UserForm'
import {createUser, type User} from '../api/userService'

export default function AddUserPage() {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <header className='page-header'>
        <h1>Add User</h1>
        <Link to='/' className='btn secondary'>
          ← Back
        </Link>
      </header>
      <div className='card'>
        <UserForm
          onSubmit={async (u: User) => {
            await createUser(u)
            alert('User created (simulated). ')
            navigate('/')
          }}
        />
      </div>
    </div>
  )
}
