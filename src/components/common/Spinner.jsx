import React from 'react'
export default function Spinner({label = 'Loading...'}: {label?: string}) {
  return (
    <div
      style={{display: 'flex', gap: 8, alignItems: 'center'}}
      aria-live='polite'
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 999,
          border: '2px solid #999',
          borderTopColor: 'transparent',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <span style={{fontSize: 14, color: '#555'}}>{label}</span>
    </div>
  )
}
