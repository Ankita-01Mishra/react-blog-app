import React from 'react'
import {  Link } from 'react-router-dom';

const CardHome = (props) => {
    const { imgUrl, title, description, articleid, techId } = props;
    return (
        <Link to="/DetailPage" style={{textDecoration:'none'}}    state={{
            imgUrl:imgUrl,
            description:description,
            title:title,
            id: techId,
        }}>
    
            <div className={articleid}>
                <div className="card__Home" >
                    <div className='card__image'>
                        <img src={imgUrl} alt="not found" />
                    </div>
                    <div className='home__bigcard__data'  >
                        <h3 >{title}</h3>
                        
                    </div>
                </div>
                {/* <hr style={{ fontWeigth: "30px", color: "black" }} /> */}
            </div>
           
            </Link>
    )

}

export default CardHome;