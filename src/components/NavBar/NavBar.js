import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbarLeft'>
            <div><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" /></div>
            <div>
            <ul className='navBarList'>
                <li>Tv Show</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>    
            </ul>
            </div>
            </div>
            <div><img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" /></div>
            
            
            
            
        </div>
    )
}

export default NavBar
