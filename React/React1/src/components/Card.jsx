import React from 'react'

const Card = ({name,adj,children}) => {
  return (
    <div style={{
      maxWidth: '320px',
      margin: '20px auto',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2rem',
        color: '#4f46e5',
        marginBottom: '12px',
        fontWeight: '700',
        letterSpacing: '1px'
      }}>
        Dodo Is {name ? name : "here"}!!
      </h1>
      <p style={{
        color: '#64748b',
        fontSize: '1rem',
        margin: 0
      }}>
        Welcome to your{adj} card component.
        {children}
      </p>
    </div>
  )
}

export default Card
