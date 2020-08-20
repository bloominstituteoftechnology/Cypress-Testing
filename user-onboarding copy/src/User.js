import React from 'react'
import styled from 'styled-components'

function User({ user }) {
  if (!user) {
    return <h3>Working fetching users...</h3>
  }

  return (
    <div className='user container'>
      <h2>{user.name ? user.name : 'No name given'}</h2>
      <p>Email: {user.email ? user.email : 'No email given'}</p>
      <p>Password: {user.password ? user.password : 'No password given'}</p>
      <p>Role: {user.role ? user.role : 'No role given'}</p>
      <p>Accepted Terms? {user.termsOfService ? 'Yes' : "No, something's wrong here"}</p>
    </div>
  )
}

export default User
