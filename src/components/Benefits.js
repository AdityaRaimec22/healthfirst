import React from 'react'
import './Advantage.css'
import BuyButton from './BuyButton';

export default function Benefits() {
    const Benefit = {
        "BigHead": [
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/protect-benefitaaa.svg",
                "heading":"Protect Benefit",
                "desc":"Covers Out of pocket expenses"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/aggregate-discountaaa.svg",
                "heading":"Aggregate Deductable discount",
                "desc":"heading"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/so-much-savings.svg",
                "heading":"So much Savings",
                "desc":"Online long term and many more discounts"
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/so-much-choices.svg",
                "heading":"So much choices",
                "desc":"Cover upto 2cr & Tenure upto 3 years"
            }
        ],
        "SmallHead": [
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/procedure-charges.svg",
                "heading":"Procedure Charges Covered"            
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/optional-items.svg",
                "heading":"Cost of disposable covered"        
            },
            {
                "img":"https://www.hdfcergo.com/images/default-source/optima-secure/cost-of-consumablea8637781354434828b117e7931c8ec95e.svg",
                "heading":"Cost of Consumables Covered"        
            }
        ],
        "Feature": [
            {
                "heading":"Support Devices",
                "desc":" We cover costs towards the cervical collar, braces, belts etc"
            },
            {
                "heading":"Cost of Disposables",
                "desc":" Go cashless with in-built coverage for disposable items like buds, gloves, nebulization kits and other consumables during hospitalisation"
            },
            {
                "heading":"Cost of kits",
                "desc":" Go cashless with in-built coverage for disposable items like buds, gloves, nebulization kits and other consumables during hospitalisation"
            },
            {
                "heading":"Procedures Charges",
                "desc":" We cover costs towards gauze, cotton, crepe bandage, surgical tape etc"
            }
        ]
    };
    
  return (
    <div>
      <div className="container">
        <h4 className='center'>--Benefits--</h4>
        <div style={{display:'flex',flexDirection:'row',border:'3px solid white',borderRadius:'15px'}}>
            <div className="box1" style={{marginRight:'20px'}}>
                {Benefit.BigHead.map((ele)=>{
                    return <div style={{display:'flex',flexDirection:'row'}}>
                        <img src={ele.img} alt="" />
                        <div>
                            <h5>{ele.heading}</h5>
                            <p>{ele.desc}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="box2">
                <div className="smallBox1" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    {Benefit.SmallHead.map((ele)=>{
                        return <div style={{margin:'auto',display:'flex',flexDirection:'row'}}>
                            <img src={ele.img} alt="" />
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
