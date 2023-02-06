import React,{useContext} from 'react'
import './Home.css';
import {store} from '../Component/Details';

const Home = () => {
    const [data]=useContext(store)
    console.log(data);
  return (
    <div className='homeFlex'>
        <div className='homeFlex1'>
            <h2 style={{color:'white',marginTop:'250px',marginLeft:'100px'}}>Title of Vertical gallery</h2>
            <p style={{color:'white',marginLeft:'100px'}}>Travel/August 21 2017</p>
        </div>
        <div className='homeFlex2'>
            <div className='homeFlex2_1'>
                <h2 style={{color:'white',marginTop:'80px',marginLeft:'20px'}}>The Sound cloud</h2>
                <h2 style={{color:'white',marginLeft:'20px'}}>You loved is doomed</h2>
                <p style={{color:'white',marginLeft:'20px'}}>Travel/August 21 2017</p>
            </div>
            <div className='homeFlex2_2'>
            <h2 style={{color:'white',marginTop:'80px',marginLeft:'20px'}}>The Sound cloud</h2>
                <h2 style={{color:'white',marginLeft:'20px'}}>You loved is doomed</h2>
                <p style={{color:'white',marginLeft:'20px'}}>Travel/August 21 2017</p>
            </div>
        </div>



        <h2 style={{marginTop:'40px'}}><span style={{textDecoration:'underline',textDecorationColor:'orange'}}>The  </span>Latest</h2>
        <div className='flexDiv2'>
            <div className='flexDiv2_one'>
                <img src="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg" alt="Image" width='300px'height='150px' />
                <h3 style={{fontSize:'22px'} }>Joshua Tree Overnight Adventure</h3>
                <p style={{color:'gray',fontSize:'14px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
            </div>
        
            <div className='flexDiv2_one'>
                <img src="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg" alt="Image" width='300px'height='150px' />
                <h3 style={{fontSize:'22px'} }>Joshua Tree Overnight Adventure</h3>
                <p style={{color:'gray',fontSize:'14px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
            </div>
        
            <div className='flexDiv2_one'>
                <img src="https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg" alt="Image" width='300px'height='150px' />
                <h3 style={{fontSize:'22px'} }>Joshua Tree Overnight Adventure</h3>
                <p style={{color:'gray',fontSize:'14px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
            </div>
         </div>


    {/* //      {/* <h2 style={{marginTop:'40px'}}><span style={{textDecoration:'underline',textDecorationColor:'orange'}}>Latest  </span>LArticle</h2> */}
          <br /> <br />
         {/* <div class="grid-container">
    //         <div class="item" id="item1">1</div>
    //         <div class="item" id="item2">2</div>
    //         <div class="item" id="item3">3</div>  
    //         <div class="item" id="item4">4</div>
    //         <div class="item" id="item5">5</div>
    //         <div class="item" id="item6">6</div>
    //         <div class="item" id="item7">7</div>  
    //         <div class="item" id="item8">8</div>
    //         <div class="item" id="item9">9</div>
    //         <div class="item" id="item10">10</div> 
    //     </div>   */}

    //     {/* <div id="flexbox3">
    //         <div id="flexbox3_1">
    //             <div id='flexbox3_1_1'>
             
    //             </div>
    //             <div id='flexbox3_1_1'>
             
    //             </div>
               
    //         </div>
    //         <div id="flexbox3_2"></div>
    //     </div> */}
              <h2 style={{marginTop:'40px'}}><span style={{textDecoration:'underline',textDecorationColor:'orange'}}>Latest  </span>Stories</h2>
         <div className='flexDiv2'>
             <div className='flexDiv2_one'>
              <h2>Catch waves with an adventure guide</h2>
              <p style={{color:'gray', marginTop:'10px',fontSize:'13px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
             </div>
             <div className='flexDiv2_one'>
              <h2>Catch waves with an adventure guide</h2>
              <p style={{color:'gray', marginTop:'10px',fontSize:'13px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
             </div>
             <div className='flexDiv2_one'>
              <h2>Catch waves with an adventure guide</h2>
              <p style={{color:'gray', marginTop:'10px',fontSize:'13px'}}>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p>
             </div>
        
        
         
         </div>
     </div>

      
    // <div>
       
    // </div>
  )
}

export default Home