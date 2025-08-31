import React from 'react'
import type {User} from '../../api/userService'
import {Link} from 'react-router-dom'

export default function UserItem({
  user,
  onDelete,
}: {
  user: User
  onDelete: (id: number) => void
}) {
  return (
    <tr className='row'>
      <td>
        <strong>
          <Link to={`/edit-user/${user.id}`}>{user.name}</Link>
        </strong>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td className='actions'>
        <Link to={`/edit-user/${user.id}`} className='btn secondary'>
          Edit
        </Link>
        <button
          className='btn danger'
          onClick={() => user.id && onDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
