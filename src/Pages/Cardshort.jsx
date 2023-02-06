import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Cardshort = (props) => {
  const {imgUrl1,title1,description1}=props
  return (
    <Link to='/DetailPage' style={{textDecoration:'none'}} state={{
      imgUrl:imgUrl1,
      description:description1,
      title:title1
    }}>
    <div className="main_container1">
    <div className='containerImg1'>
    <img src={imgUrl1} alt="" />
    </div>
    <div className='containerText1'>
    <h4>{title1}</h4>
    <p>{description1}</p>
    </div>
  </div>
  </Link>
  )
}

export default Cardshort