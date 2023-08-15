import React from 'react'
import './Advantage.css'
import BuyButton from './BuyButton';

export default function Benefits() {
    const Benefit = {
        "BigHead": [
            {
                "img":"",
                "heading":"heading",
                "desc":"heading"
            },
            {
                "img":"",
                "heading":"heading",
                "desc":"heading"
            },
            {
                "img":"",
                "heading":"heading",
                "desc":"heading"
            },
            {
                "img":"",
                "heading":"heading",
                "desc":"heading"
            }
        ],
        "SmallHead": [
            {
                "img":"",
                "heading":"SmallHeading"            
            },
            {
                "img":"",
                "heading":"SmallHeading"        
            },
            {
                "img":"",
                "heading":"SmallHeading"        
            }
        ],
        "Feature": [
            {
                "heading":"heading",
                "desc":"desc"
            },
            {
                "heading":"heading",
                "desc":"desc"
            },
            {
                "heading":"heading",
                "desc":"desc"
            },
            {
                "heading":"heading",
                "desc":"desc"
            }
        ]
    };
    
  return (
    <div>
      <div className="container">
        <h4 className='center'>--Benefits--</h4>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div className="box1" style={{marginRight:'20px'}}>
                {Benefit.BigHead.map((ele)=>{
                    return <div>
                        <img src={ele.img} alt="" />
                        <div>
                            <h5>{ele.heading}</h5>
                            <p>{ele.desc}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="box2">
                <div className="smallBox1" style={{display:'flex',flexDirection:'row'}}>
                    {Benefit.SmallHead.map((ele)=>{
                        return <div style={{margin:'20px'}}>
                            <h6>{ele.heading}</h6>
                        </div>
                    })}
                </div>
                <div className="smallBox2">
                    <h6>Key Features</h6>
                    {Benefit.Feature.map((ele)=>{
                        return <h6><strong>{ele.heading}</strong>: {ele.desc}</h6>
                    })}
                </div>
            </div>
        </div>
        <BuyButton/>
      </div>
    </div>
  )
}
