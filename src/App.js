import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Home from './Pages/Home';
import Bollywood from './Pages/Bollywood';
import Hollywood from './Pages/Hollywood';
import Technology from './Pages/Technology';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Details from './Component/Details';
import DetailPage from './Pages/DetailPage';
import Menuicon from './Pages/Menuicon';


function App() {
  return (
    <>
    <Details>
      <Header/>
      {/* <Nav/> */}
      {/* <Menuicon/> */}

      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Bollywood' element={<Bollywood/>}/>
            <Route path='/tech' element={<Technology/>}/>
            <Route path='/holly' element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/DetailPage' element={<DetailPage/>}/>
        </Routes>
        
        </Details>
    </>
  )
}

export default App

