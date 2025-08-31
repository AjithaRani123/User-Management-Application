import React from 'react'
export default function ErrorMessage({message}: {message: string}) {
  return (
    <div
      role='alert'
      style={{
        background: '#fee2e2',
        color: '#991b1b',
        border: '1px solid #fecaca',
        borderRadius: 12,
        padding: '10px 12px',
        fontSize: 14,
      }}
    >
      {message}
    </div>
  )
}
