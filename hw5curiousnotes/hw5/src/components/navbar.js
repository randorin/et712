import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = function() {
    return (
        <>
            <nav className='navbar'>
                <div>
                    <h3>Members</h3>
                    <hr></hr>
                </div>
                <div className='btngroup'>
                    <Link to="/">Home</Link>
                    <Link to="/irene">Irene</Link>
                    <Link to="/seulgi">Seulgi</Link>
                    <Link to="/wendy">Wendy</Link>
                    <Link to="/joy">Joy</Link>
                    <Link to="/yeri">Yeri</Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar