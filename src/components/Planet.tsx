import React from 'react'
import Sun from '../assets/sun.png'
import Moon from '../assets/moon.png'
import './styles/Planet.scss'

const Planet = () => {
    return (
        <div className="header">
            <h1>0° Degreese</h1>
            <img src={Sun} alt="" />
        </div>
    )
}

export default Planet
