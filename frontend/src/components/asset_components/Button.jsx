import React from 'react'
// import { Button } from 'reactstrap'

const ButtonComponent = ({ text, loading, className, ...props }) => {
    return (
        <button {...props}
            type="button"
            className= {`btn btn-primary ${className}`}
        >
            {loading ? 'loading...' : text}
        </button>
    )
}

export default ButtonComponent