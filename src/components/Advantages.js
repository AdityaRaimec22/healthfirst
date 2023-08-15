import React from 'react'
import './Advantage.css'

export default function Advantages() {
    const features = [
        {
            "img":"https://www.hdfcergo.com/images/default-source/health-insurance-new/10000-cashless-network-hospitals.svg",
            "feature":"~12,000+ Cashless Healthcare Networkˇ",
            "desc":""
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/health-campaign-dec/100-claim-settlement-ratio478aba801e364dfcb241243342eeced9.svg",
            "feature":"100% claim settlement ratio",
            "desc":""
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/health-insurance/no-cost-emi.svg",
            "feature":"No Cost installment benefit",
            "desc":""
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/optima-secure-images/7500-crore-claim.svg",
            "feature":"Additional 5% online discount ",
            "desc":""
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/optima-secure-images/1-claim-per-minute.svg",
            "feature":"Covers non medical expense",
            "desc":""
        },
        {
            "img":"https://www.hdfcergo.com/images/default-source/health-campaign-page-icons/1-5-cr-happy-customers.svg",
            "feature":"1.5crore+ happy customers target in 1 year",
            "desc":""
        }
    ]
  return (
    <>
    <div className='container'>
      <h4 className='center'>---Why Us---</h4>
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
