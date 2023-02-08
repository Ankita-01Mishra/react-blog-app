// import React,{useContext} from 'react'
// import './Home.css';
// import {store} from '../Component/Details';

// const Home = () => {
//     const [data]=useContext(store)
//     console.log(data);
//   return (
//     <div className='homeFlex'>
//         <div className='homeFlex1'>
//             <h2 style={{color:'white',marginTop:'250px',marginLeft:'100px'}}>Title of Vertical gallery</h2>
//             <p style={{color:'white',marginLeft:'100px'}}>Travel/August 21 2017</p>
//         </div>
//         <div className='homeFlex2'>
//             <div className='homeFlex2_1'>
//                 <h2 style={{color:'white',marginTop:'80px',marginLeft:'20px'}}>The Sound cloud</h2>
//                 <h2 style={{color:'white',marginLeft:'20px'}}>You loved is doomed</h2>
//                 <p style={{color:'white',marginLeft:'20px'}}>Travel/August 21 2017</p>
//             </div>
//             <div className='homeFlex2_2'>
//             <h2 style={{color:'white',marginTop:'80px',marginLeft:'20px'}}>The Sound cloud</h2>
//                 <h2 style={{color:'white',marginLeft:'20px'}}>You loved is doomed</h2>
//                 <p style={{color:'white',marginLeft:'20px'}}>Travel/August 21 2017</p>
//             </div>
//         </div>



//         <h2 style={{marginTop:'40px'}}><span style={{textDecoration:'underline',textDecorationColor:'orange'}}>The  </span>Latest</h2>
//         <div className='flexDiv2'>
//             <div className='flexDiv2_one'>
//                 <img src="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg" alt="Image" width='300px'height='150px' />
//                 <h3 style={{fontSize:'22px'} }>Joshua Tree Overnight Adventure</h3>
//                 <p style={{color:'gray',fontSize:'14px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
//             </div>
        
//             <div className='flexDiv2_one'>
//                 <img src="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg" alt="Image" width='300px'height='150px' />
//                 <h3 style={{fontSize:'22px'} }>Joshua Tree Overnight Adventure</h3>
//                 <p style={{color:'gray',fontSize:'14px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
//             </div>
        
//             <div className='flexDiv2_one'>
//                 <img src="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg" alt="Image" width='300px'height='150px' />
//                 <h3 style={{fontSize:'22px'} }>Joshua Tree Overnight Adventure</h3>
//                 <p style={{color:'gray',fontSize:'14px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
//             </div>
//          </div>


//     {/* //      {/* <h2 style={{marginTop:'40px'}}><span style={{textDecoration:'underline',textDecorationColor:'orange'}}>Latest  </span>LArticle</h2> */}
//           <br /> <br />
//          {/* <div class="grid-container">
//     //         <div class="item" id="item1">1</div>
//     //         <div class="item" id="item2">2</div>
//     //         <div class="item" id="item3">3</div>  
//     //         <div class="item" id="item4">4</div>
//     //         <div class="item" id="item5">5</div>
//     //         <div class="item" id="item6">6</div>
//     //         <div class="item" id="item7">7</div>  
//     //         <div class="item" id="item8">8</div>
//     //         <div class="item" id="item9">9</div>
//     //         <div class="item" id="item10">10</div> 
//     //     </div>   */}

//     //     {/* <div id="flexbox3">
//     //         <div id="flexbox3_1">
//     //             <div id='flexbox3_1_1'>
             
//     //             </div>
//     //             <div id='flexbox3_1_1'>
             
//     //             </div>
               
//     //         </div>
//     //         <div id="flexbox3_2"></div>
//     //     </div> */}
//               <h2 style={{marginTop:'40px'}}><span style={{textDecoration:'underline',textDecorationColor:'orange'}}>Latest  </span>Stories</h2>
//          <div className='flexDiv2'>
//              <div className='flexDiv2_one'>
//               <h2>Catch waves with an adventure guide</h2>
//               <p style={{color:'gray', marginTop:'10px',fontSize:'13px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
//              </div>
//              <div className='flexDiv2_one'>
//               <h2>Catch waves with an adventure guide</h2>
//               <p style={{color:'gray', marginTop:'10px',fontSize:'13px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
//              </div>
//              <div className='flexDiv2_one'>
//               <h2>Catch waves with an adventure guide</h2>
//               <p style={{color:'gray', marginTop:'10px',fontSize:'13px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
//              </div>
        
        
         
//          </div>
//      </div>

      
//     // <div>
       
//     // </div>
//   )
// }

// export default Home



import React, { useContext } from 'react'
import './Home.css'
import '../App.css'
// import ImageCard from './ImageCard'
import CardHome from './CardHome'
import Card from './Card'
import { store } from '../Component/Details'
// import Cardshort from './Cardshort';
import './Fitness.css'
import './Card.css'
import Cardshort from './Cardshort'
import Menuicon from './Menuicon'
import Nav from '../Component/Nav'

const Home = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
    <div className="homeNav">
      <Nav/>
    </div>
     <div className="homeMenu">
     <Menuicon/>
     </div>
      <div className='Home'>
{/* 
        <div className='home-image'>
          <div className='home-dis-1'>
            <ImageCard src='https://www.boredpanda.com/blog/wp-content/uploads/2022/09/nwephotography_oscarkeserci_-3-632b4eb5661a4__700.jpg' />
          </div>
          <div className='home-dis-2'>
            <div className='in-div-dis'>
              <ImageCard src='https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?b=1&s=170667a&w=0&k=20&c=MMQAIpDombUQd_8FV9os3jLzza26-oqaOhO3AgUSt9k=' />

            </div>
            <div className='in-div-dis'>
              <ImageCard src='https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?b=1&s=170667a&w=0&k=20&c=MMQAIpDombUQd_8FV9os3jLzza26-oqaOhO3AgUSt9k=' />

            </div>
          </div>
        </div> */}


<div className='homeFlex'>
         <div className='homeFlex1'>
             <h2 style={{color:'white',marginTop:'250px',marginLeft:'100px'}}>Title of Vertical gallery</h2>            
              <p style={{color:'white',marginLeft:'100px'}}>Travel/Feb 2 2023</p>
         </div>
         <div className='homeFlex2'>
             <div className='homeFlex2_1'>
                 <h3 style={{color:'black',marginTop:'80px',marginLeft:'20px'}}>The Sound cloud</h3>
                 <h3 style={{color:'black',marginLeft:'20px'}}>You loved is doomed</h3>
                 <p style={{color:'black',marginLeft:'20px'}}>Travel/Feb 2 2023</p>
             </div>
             <div className='homeFlex2_2'>
             <h3 style={{color:'black',marginTop:'80px',marginLeft:'20px'}}>The Sound cloud</h3>
                 <h3 style={{color:'black',marginLeft:'20px'}}>You loved is doomed</h3>
                 <p style={{color:'black',marginLeft:'20px'}}>Travel/Feb 2 2023</p>
            </div>
         </div>
         </div>


        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className='homeLatest'>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        </div>


        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>
        <div>
    <div className='fitnessFlex'>
      <div className="fitnessLeft">
        <br /> <br />
    <h2 className='Fitness-heading' style={{textDecoration:'underline',textDecorationColor:'blue',marginLeft:'50px',fontSize:'29px'}}>Technology</h2>
        {data.filter((article)=>{return article.category==="mix" }).map((n,index)=>(
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
      {data.filter((article)=>{return article.category==="mix" }).map((m,index)=>(
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






        {/* <h2 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h2>
        <hr />
        <div className="homeLatest1">
        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

               
        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
      </div> */}
      </div>



    </>
  )
}

export default Home