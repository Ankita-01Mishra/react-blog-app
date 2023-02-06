import React from 'react'
import { Link } from "react-router-dom"
// import SingleBlogPage from './SingleBlogPage'
import { useLocation } from 'react-router-dom'


const DetailPage = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "8px",
        padding: '5px 20px'
    }
    const location = useLocation();
   const { title, imgUrl, description } = location.state;
//    console.log(location.title)
    return (
        <div className='main' style={{textAlign:'center',marginTop:'20px'}}>
         <div className='single__page'>
            <h1>{title}</h1>
            <br />
            <img src={imgUrl} alt="" />
            <br /> <br />
            <p>{description}</p>
        </div>
        <br /><br />
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;