import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
    <div className='error-container'>
      <h1>oooops! it's a dead end</h1>
      <Link className='btn-primary' to='/'>
      back to homepage
      </Link>
    </div>
    </section>
  )
}

export default Error
