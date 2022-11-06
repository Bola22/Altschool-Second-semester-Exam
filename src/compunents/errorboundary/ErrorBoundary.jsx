import React from 'react'
import "./errorb.css"

function ErrorBoundary({ err }) {
  return (
    <div className='Eb'>
      <h1>{ err }</h1>
      <h2>Error receiving Data</h2>
      <p> Check your internet for connection</p>
    </div>
  )
}

export default ErrorBoundary
