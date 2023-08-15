import React from 'react'
import BuyButton from './BuyButton'

export default function Questions() {
  const Questions = [
      {
        "question":"1. What is a secure benefit with my Optima Secure?",
        "answer":"The word secure resonates with being safe and tension-free. Under Optima Secure plan, we provide you with the secure benefit. This health insurance plan offers additional coverage up to 100% of the base sum insured immediately upon purchase at no extra charge. This additional amount can be utilised for any number of admissible claims. Now isn't this truly a benefit that can keep you secure. Example: You have bought an Optima Secure Health Insurance plan with a health cover or sum insured of 5 lacs. In this case, your sum insured instantly gets doubled up to offer you a total health cover of 10lacs instead of a basic 5 lacs health cover for which you paid your valuable premium. This additional amount can be utilised for any number of admissible claims. That means you can now make claims up to 10 lacsinstead of 5 lacs. "
        
      },
      {
        "question":"2. If I am hospitalised, can I opt for AC Single room in the hospital?",
        "answer":""
      },
      {
        "question":"3. What is the meaning of aggregate deductible? How does it work?",
        
        "answer":""
      },
      {
        "question":"4.I have a car insurance with HDFC ERGO for the past 3 years. Am I eligible for any discount?",
        "answer":""
      },
      {
        "question":"5. What is protect benefit with my Optima Secure?",
        "answer":""
      },
      {
        "question":"6.If I meet with an accident just 10 days after buying health insurance,am I eligible to claim under health insurance? ",
        "answer":""
      },
      {
        "question":"7. My wife delivered a baby 6 months ago, Can I include the child under my health insurance?",
        "answer":""
      },
      {
        "question":"8. What is the automatic restore benefit? ",
        "answer":""
      },
      {
        "question":"9. What is the maximum sum insured available? ",
        "answer":""
      },
      {
        "question":"10. Are Covid-19 expenses covered under my Optima Secure plan? ",
        "answer":""
      },
  ]
  return (
    
    <div className='container' >
      <h4 className='center'><b>--Frequently asked Questions On health first--</b></h4>
      <div style={{border:'3px solid white',borderRadius:'15px'}}>
        <div>
          {Questions.map((ele)=>{
            return <div>
              <h5>{ele.question}</h5>
            <div></div>
            </div>
          })}

        </div>
      </div>
      <BuyButton/>
    </div>
  )
}
