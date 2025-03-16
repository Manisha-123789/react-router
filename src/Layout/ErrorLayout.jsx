import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorLayout = () => {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <div>
      <h1>An Error Occured</h1>
      <h3>{error.message}</h3>
      <button onClick={()=>navigate('/')}>go to home page</button>
    </div>
  )
}

export default ErrorLayout
