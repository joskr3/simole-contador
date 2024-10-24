import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='flex w-full  border border-black rounded-lg p-3 m-6 justify-between'>
            <Link to="/">
                <p className='text-7xl'>INICIO</p>
            </Link>

            <ul className='list-none flex gap-6'>
                <li >
                    <Link to="/contador">Contador</Link>
                </li>
                <li >
                    <Link to="/saludo">Saludo</Link>
                </li>
                <li >
                    <Link to="/tareas">Tareas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar