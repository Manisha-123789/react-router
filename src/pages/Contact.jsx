import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>
                Contact Page
            </h1>
            <button onClick={() => navigate('form')}>Form</button>
            <button onClick={() => navigate('info')}>Info</button>
        </>

    )
}

export default Contact
