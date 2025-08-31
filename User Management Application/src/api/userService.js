export type User = {
  id?: number // optional for new (until API echoes an id)
  name: string
  email: string
  phone: string
  username?: string
  website?: string
}

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {'Content-Type': 'application/json'},
  timeout: 15000,
})

export async function getUsers() {
  const {data} = await api.get<User[]>('/users')
  return data
}

export async function getUser(id: string | number) {
  const {data} = await api.get<User>(`/users/${id}`)
  return data
}

export async function createUser(payload: User) {
  const {data} = await api.post<User>('/users', payload)
  if (!data.id) data.id = Math.floor(1000 + Math.random() * 9000) // safety for UI state
  return data
}

export async function updateUser(id: string | number, payload: User) {
  const {data} = await api.put<User>(`/users/${id}`, payload)
  return data
}

export async function deleteUser(id: string | number) {
  await api.delete(`/users/${id}`)
}
