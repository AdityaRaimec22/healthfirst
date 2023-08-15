import React from 'react'
import './Advantage.css'
import BuyButton from './BuyButton'

export default function Coverage() {
    const Coverage = [
        {
            "img":"https://www.hdfcergo.com/images/default-source/optima-secure-images/choose-sum9e692acf61fe4bb4a042656200cb57c8.svg",
            "headline":"Choose your Health Cover",
            "subHeadline":"Select Your sum inseured",
            "description":"Suiting your budget and requirements, select the coverage you want. For example, let's consider you select a sum insured of ₹10 lacs."
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/optima-secure-images/20lacs-hdf.svg",
            "headline":"Secure Benefit",
            "subHeadline":"2 coverage from first day",
            "description":"Your base cover gets doubled instantly upon purchase, without having the need to claim it. This benefit will instantly increase your ₹10 lacs base cover to ₹20 lacs at no extra cost."
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/optima-secure-images/3x-hdf.svg",
            "headline":"Plus Benefit",
            "subHeadline":"100% increase in coverage",
            "description":"On 1st renewal your base cover increases by 50% after 1 year and 100% after 2 years, making it ₹15 lacs and ₹20 lacs respectively. Your total cover now becomes ₹30 lacs i.e 3X of your base cover."
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/optima-secure-images/40lacs-v2.svg",
            "headline":"Restore Benefit",
            "subHeadline":"100% restore coverage",
            "description":"Anytime you make a claim whether partial or total of ₹10 lacs base cover, it gets 100% restored for any subsequent claims in the same year. "
        },
    ]
  return (
    <div className='container'>
      <h4 className='center'>--So Much Coverage--</h4>
      <div style={{display:'flex',flexDirection:'row',border:'3px solid white',borderRadius:'15px'}}>
        {Coverage.map((ele)=>{
            return <div style={{margin:'auto'}} >
              <img src={ele.img} alt="" />
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
