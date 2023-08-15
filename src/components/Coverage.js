import React from 'react'
import './Advantage.css'
import BuyButton from './BuyButton'

export default function Coverage() {
    const Coverage = [
        {
            "img":"",
            "headline":"Heading",
            "subHeadline":"Sub Heading",
            "description":"Desc"
        },
        {
            "img":"",
            "headline":"Heading",
            "subHeadline":"Sub Heading",
            "description":"Desc"
        },
        {
            "img":"",
            "headline":"Heading",
            "subHeadline":"Sub Heading",
            "description":"Desc"
        },
        {
            "img":"",
            "headline":"Heading",
            "subHeadline":"Sub Heading",
            "description":"Desc"
        },
    ]
  return (
    <div className='container'>
      <h4 className='center'>--So Much Coverage--</h4>
      <div style={{display:'flex',flexDirection:'row'}}>
        {Coverage.map((ele)=>{
            return <div style={{margin:'auto'}} >
            <h5>{ele.headline}</h5>
            <h6>{ele.subHeadline}</h6>
            <p>{ele.description}</p>
        </div>
        })}
      </div>
      <BuyButton/>
    </div>
  )
}
