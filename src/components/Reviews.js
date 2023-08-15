import React from 'react'
import BuyButton from './BuyButton'
import './Advantage.css'

export default function Reviews() {
    const support = {
        "consumerSupport":[
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/nearly-10k-cashless-hospitals.svg",
                "desc":"Wider Pre & Post Hospitalization"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/75000-crore-claims-settled.svg",
                "desc":"Premium start at 24/day"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/1-claim-processed-every-minute.svg",
                "desc":"1 Claim processed every minute"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/24x7-call-centre-serving-in-10-language.svg",
                "desc":"24x7 suppport in 10 languages"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/health-lob/icons-hd/happy-customers.svg",
                "desc":"1.5cr+happy customers"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/health-campaign-dec/99-8-claim-settlement-ratio(1).png",
                "desc":"100% claim settlement ratio"
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
        <div className='newDiv' style={{border:'3px solid white',borderRadius:'15px'}}>
            <div>
                <img className='firstImg' src="https://www.hdfcergo.com/images/default-source/new-campaign-page-all-lob/optima-secure-logo.svg" alt="" />
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'40px'}}>
                <div><p>Backed by the trust of 1.5 crore+ happy customers@ over the past 18 years. At HDFC ERGO, we consistently strive to make insurance affordable, easier and dependable. Here, promises are kept, claims are fulfilled and lives are nurtured with
                    utmost commitment. </p></div>
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
        {/* <h5 className='center'>--Reviews--</h5>
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
        </div> */}
        <BuyButton/>
    </div>
  )
}
