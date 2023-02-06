import React from 'react'
import { useState } from 'react';
import Menubar from './Menubar'
import './Card'
const Menuicon = () => {
const [show, setshow]=useState(false);
const click1=()=>{
    setshow(!show)
    }
  return (
    <>
    <div id='menu'>
      <button className='btn' id="btn1" onClick={click1}><img src="https://www.creativefabrica.com/wp-content/uploads/2020/02/08/Menu-Icon-Graphics-1-580x387.jpg" alt="menu" width='50px'/></button>
    </div>

    <div id="fun">
        {show?<Menubar/>:''}
    </div>
</>
  )
}

export default Menuicon
