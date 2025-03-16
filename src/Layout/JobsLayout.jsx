import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
    return (
        <>
            <h1>Job Opening</h1>
            <p>Latest current job opening in your city</p>
            <Outlet/>
        </>
    )
}

export default JobsLayout
