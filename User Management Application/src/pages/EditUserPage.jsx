import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import UserForm from '../components/users/UserForm'
import {getUser, updateUser, type User} from '../api/userService'
import Spinner from '../components/common/Spinner'
import ErrorMessage from '../components/common/ErrorMessage'

export default function EditUserPage() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        if (!id) throw new Error('Missing user id')
        const data = await getUser(id)
        if (mounted) setUser(data)
      } catch (e: any) {
        if (mounted) setError(e?.message || 'Failed to load user.')
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [id])

  return (
    <div className='container'>
      <header className='page-header'>
        <h1>Edit User</h1>
        <Link to='/' className='btn secondary'>
          ← Back
        </Link>
      </header>

      {loading && (
        <div className='center'>
          <Spinner label='Loading user...' />
        </div>
      )}
      {error && <ErrorMessage message={error} />}

      {user && (
        <div className='card'>
          <UserForm
            initial={user}
            onSubmit={async u => {
              await updateUser(user.id!, u)
              alert('User updated (simulated). ')
              navigate('/')
            }}
          />
        </div>
      )}
    </div>
  )
}
