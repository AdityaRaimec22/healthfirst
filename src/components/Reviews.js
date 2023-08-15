import React from 'react'
import BuyButton from './BuyButton'

export default function Reviews() {
    const support = {
        "consumerSupport":[
            {
                "img":"",
                "desc":""
            },
            {
                "img":"",
                "desc":""
            },
            {
                "img":"",
                "desc":""
            },
            {
                "img":"",
                "desc":""
            },
            {
                "img":"",
                "desc":""
            },
            {
                "img":"",
                "desc":""
            },
        ],
        "reviews":[
            {
                "img":"",
                "name":"",
                "heading":"",
                "desc":"",
            },
            {
                "img":"",
                "name":"",
                "heading":"",
                "desc":"",
            },
            {
                "img":"",
                "name":"",
                "heading":"",
                "desc":"",
            },
            {
                "img":"",
                "name":"",
                "heading":"",
                "desc":"",
            },
            {
                "img":"",
                "name":"",
                "heading":"",
                "desc":"",
            }
        ]
    
}
  return (
    <div className='container'>
        <h4 className='center'><strong>--So Much </strong> Trust--</h4>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div>
                <img style={{width: '250px'}} src="https://www.hdfcergo.com/images/default-source/new-campaign-page-all-lob/optima-secure-logo.svg" alt="" />
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'40px'}}>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quasi quae explicabo reiciendis, ex, voluptates cupiditate perferendis 
                    numquam fugit porro magni placeat tempore earum cumque libero distinctio
                    eligendi architecto omnis praesentium!</p></div>
                <div className='row wrap'>
                    {support.consumerSupport.map((ele)=>{
                        return <div className='infoDiv'>
                        <img src={ele.img} alt="" />
                        <h6>{ele.desc}</h6>
                    </div>
                    })}
                </div>    
            </div>
        </div>
        <h5 className='center'>--Reviews--</h5>
        <div className='my-4 row'>
            {support.reviews.map((ele)=>{
                return <div style={{margin:'auto'}} className='row reviewerDiv'>
                    <div><img src={ele.img} alt="" /></div>
                    <div className='column'>
                        <h5>{ele.name}</h5>
                        <h6>{ele.heading}</h6>
                        <p>{ele.desc}</p>
                    </div>
                </div>
            })}
        </div>
        <BuyButton/>
    </div>
  )
}
