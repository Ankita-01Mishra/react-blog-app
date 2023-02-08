import React,{useContext} from 'react'
import {store} from '../Component/Details';
import Card from './Card';
import Cardshort from './Cardshort';
import './Card.css'
import Nav from '../Component/Nav';
import Menuicon from './Menuicon';
const Hollywood = () => {
  const [data]=useContext(store)
    console.log(data);
  return (
    <div>
      <Nav/>
      <Menuicon/>
    <div className='fitnessFlex'>
      <div className="fitnessLeft">
        <br /> <br />
    <h2 className='Fitness-heading' style={{textDecoration:'underline',textDecorationColor:'blue',marginLeft:'50px',fontSize:'29px'}}>Hollywood</h2>
        {data.filter((article)=>{return article.category==="Hollywood" }).map((n,index)=>(
          <Card
          imgUrl={n.img}
          title={n.title}
          key0={n.id}
          description={n.description.slice(0,100)}
          />
        ))}
      </div>
      <div className="fitnessRight">
        <br /> <br /> <br />
      <h2 className='Fitness-heading'><span style={{textDecoration:'underline',textDecorationColor:'blue'}}>Top</span> Post</h2>
      {data.filter((article)=>{return article.category==="Hollywood" }).map((m,index)=>(
          <Cardshort
          imgUrl1={m.img}
          title1={m.title}
          key1={m.id}
          description1={m.description.slice(0,100)}
          />
      ))}
      <div className="adv">Advertisement</div>
      </div>
    </div>
    </div>
  )
}

export default Hollywood