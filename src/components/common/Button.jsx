import React from 'react'

const Button = ({ children, btntype }) => {
    return (
        <button className={`${btntype === "secondary" ? "btn-secondary" : btntype === "outline" ? "btn-outline" : "btn-primary"}`}>
            {children}
        </button>
    )
}

export default Button