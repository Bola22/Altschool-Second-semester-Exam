import React from 'react'
import {Link} from "react-router-dom"
import "./error.css"
function Error() {
  return (
    <div className='error-page'>
      <h1>ERROR 404</h1>
      <h2>PAGE NOT FOUND</h2>

      <p>1. Check your internet for connection</p>
      <p>2. Are sure the website URL is correct</p>
      <p>3. Get in touched with the site owner</p>

      <Link to="/" className='btn'>Go Home</Link>

    </div>
  )
}

export default Error
