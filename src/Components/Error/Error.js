import React from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
    let navigate = useNavigate()
    return (
        <div className="error">
            <h1>404</h1>
            <h3>That page was not found</h3>
            <button className="btn-navigate" onClick={() => {
                navigate('/')
            }}>⬅ Back to Home</button>

        </div>
    )
}

export default Error