import {useCallback, useEffect, useState} from 'react'
import {
  User,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../api/userService'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const fetchAll = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (e: any) {
      setError(e?.message || 'Failed to fetch users. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  const addUser = useCallback(async (u: User) => {
    const created = await createUser(u)
    setUsers(prev => [created, ...prev])
    setMessage('User created (simulated). ')
    return created
  }, [])

  const editUser = useCallback(async (id: number, u: User) => {
    const updated = await updateUser(id, u)
    setUsers(prev => prev.map(x => (x.id === id ? updated : x)))
    setMessage('User updated (simulated). ')
    return updated
  }, [])

  const removeUser = useCallback(async (id: number) => {
    await deleteUser(id)
    setUsers(prev => prev.filter(x => x.id !== id))
    setMessage('User deleted (simulated). ')
  }, [])

  return {
    users,
    loading,
    error,
    message,
    setMessage,
    fetchAll,
    addUser,
    editUser,
    removeUser,
  }
}
