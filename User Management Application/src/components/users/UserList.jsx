import React from 'react'
import type {User} from '../../api/userService'
import UserItem from './UserItem'

export default function UserList({
  users,
  onDelete,
}: {
  users: User[]
  onDelete: (id: number) => void
}) {
  if (!users.length) return <p>No users found.</p>
  return (
    <div className='table-wrap'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <UserItem key={u.id} user={u} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
