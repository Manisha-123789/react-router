import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFount = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>404 | Page Not Found</h1>
            <button onClick={()=>navigate('/')}>Go to Home Page</button>
        </>
    )
}

export default NotFount
