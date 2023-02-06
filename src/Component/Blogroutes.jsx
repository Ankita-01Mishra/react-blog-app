import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/'
import Hollywood from '../Pages/Hollywood'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'



const Blogroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Bollywood' element={<Bollywood/>}/>
            <Route path='/tech' element={<Technology/>}/>
            <Route path='/holly' element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
        </Routes>
    </div>
  )
}

export default Blogroutes