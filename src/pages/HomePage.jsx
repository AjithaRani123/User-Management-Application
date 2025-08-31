import React from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../components/common/Spinner'
import ErrorMessage from '../components/common/ErrorMessage'
import UserList from '../components/users/UserList'
import {useUsers} from '../hooks/useUsers'

export default function HomePage() {
  const {users, loading, error, removeUser, message, setMessage} = useUsers()
  return (
    <div className='container'>
      <header className='page-header'>
        <h1>User Management</h1>
        <Link to='/add-user' className='btn primary'>
          + Add User
        </Link>
      </header>

      {message && (
        <div className='mb' onAnimationEnd={() => setMessage(null)}>
          <div className='alert success'>{message}</div>
        </div>
      )}

      {loading && (
        <div className='center'>
          <Spinner label='Fetching users...' />
        </div>
      )}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <UserList users={users} onDelete={id => removeUser(id)} />
      )}
    </div>
  )
}
