import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {
  const {imgUrl,title,description}=props
  return (
    <Link to='/DetailPage' style={{textDecoration:'none'}} state={{
      imgUrl:imgUrl,
      description:description,
      title:title
    }}>
    <div className="main_container">
    <div className='containerImg'>
    <img src={imgUrl} alt="" />
    </div>
    <div className='containerText'>
    <h2>{title}</h2>
    <p>{description}</p>
    </div>
  </div>
  </Link>
  
  )
}

export default Card