import React from 'react'
import Campab from './Campab.png'
import './CampAb.css';

function CampAb() {
  return (
    <>
        <div className='CampAb_bg'>
          <img src={Campab} className='CampAb_Image' alt="CA" />
            
        
            <div>
                <h1 className='CampAb_Header'>CAMPUS AMBASSADOR</h1>
                <p className='CampAb_Desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum voluptas obcaecati velit fugiat quis adipisci cum tempora dolores nemo, qui tenetur! Sit ratione nulla, soluta perspiciatis cupiditate eius amet.</p>
            </div>
        </div>
            
        </>
  )
}

export default CampAb