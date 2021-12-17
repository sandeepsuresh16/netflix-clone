import React from 'react'
import "./Banner.css"
function Banner() {
    return (
        <div className='banner'> 
            <div className="component">

                <h1 className='title'>Movie Name</h1>
                <div className='buttton_items'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>
            </div>
            <div className="bottom"></div>
            
        </div>
    )
}

export default Banner
