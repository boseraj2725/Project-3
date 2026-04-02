import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav>
            <Link to='home' className='ok'>Home</Link>
            <Link to='/about' className='ok'>About</Link>
            <Link to='/requirements' className='ok'>Requirements</Link>
            <Link to='/game' className='ok'>Game</Link>
            <Link to='/team' className='ok'>Team</Link>
            <Link to='/contact' className='ok'>Contact</Link>
            <Link to='/' className='ok'>Login</Link>
          
            </nav>
        </div>
    )
}

export default Nav
