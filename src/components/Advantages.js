import React from 'react'
import './Advantage.css'

export default function Advantages() {
    const features = [
        {
            "img":"",
            "feature":"desc",
            "desc":""
        },
        {
            "img":"",
            "feature":"desc",
            "desc":""
        },
        {
            "img":"",
            "feature":"desc",
            "desc":""
        },
        {
            "img":"",
            "feature":"desc",
            "desc":""
        },
        {
            "img":"",
            "feature":"desc",
            "desc":""
        },
        {
            "img":"",
            "feature":"desc",
            "desc":""
        }
    ]
  return (
    <>
    <div className='container'>
      <h4 style={{display:'flex',justifyContent:'center'}}>---Why Us---</h4>
      <div className='advantageContainer'>
        {features.map((ele)=>{
            return <div className='innerDiv'>
            <img src={ele.img} alt="" />
            <h6>{ele.feature}</h6> 
        </div>
        })}
        </div>
        <div className='descriptionBox'>
        </div>
      </div>
    </>
  )
}
