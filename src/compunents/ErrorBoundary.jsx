import React from 'react'

function ErrorBoundary({ err }) {
  return (
    <div style={{ background: "red", width: "300px", display: "flex" }}>
      { err }
    </div>
  )
}

export default ErrorBoundary
