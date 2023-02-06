import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Menubar=()=>{
    return(
        <div className='menuBar' >
           <ul>
        <h4><li><Link to ='/'>Home</Link></li></h4>
        <h4><li><Link to ='/Bollywood'>Bollywood</Link></li></h4>
        <h4><li><Link to ='/tech'>Technology</Link></li></h4>
        <h4><li><Link to ='/holly'>Hollywood</Link></li></h4>
        <h4><li><Link to ='/fitness'>Fitness</Link></li></h4>
        <h4><li><Link to ='/food'>Food</Link></li></h4>
      </ul>
        </div>
    )
}

export default Menubar