import React, {useState} from 'react'
import BuyButton from './BuyButton'
import SwitchButton from './SwitchButton'

export default function Claim() {
  const[claimType, setClaimType] = useState('Cashless_Claim');
  const claim = {
    "Cashless_Claim": [
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/new-hd/health-insurance-claim-intimate-us.svg",
        "heading":"Intimation",
        "desc":"Fill up the pre-auth form at the network hospital for cashless approval"
      },
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/new-hd/health-insurance-claim-approval-rejection.svg",
        "heading":"Approval/Rejection",
        "desc":"Once hospital intimates us, we send you the status update"
      },
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/new-hd/health-insurance-claim-hospitalisation.svg",
        "heading":"Hospitalisation",
        "desc":"Once hospital intimates us, we send you the status update"
      },
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/new-hd/health-insurance-claim-claim-settlement.svg",
        "heading":"Claim settlement",
        "desc":"Once hospital intimates us, we send you the status update"
      }
    ],
    "Reimbursement_Claim":[
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/reimbursement-claim-hospitalisation.svg",
        "heading":"Hospitalisation",
        "desc":"When you select a hospital, which is not in our network for reimbursement claims you need to pay the bills initially and preserve the original invoices"
      },
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/reimbursement-claim-registration.svg",
        "heading":"Register A Claim",
        "desc":"Post-hospital discharge send us all your original invoices and treatment documents"
      },
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/reimbursement-claim-verfication.svg",
        "heading":"Verification",
        "desc":"We verify your claim related invoices and treatment documents "
      },
      {
        "img":"https://www.hdfcergo.com/images/default-source/health-lob/reimbursement-claim-approval.svg",
        "heading":"Claim settlement",
        "desc":"We send the approved claim amount to your bank account."
      }
    ]
  }

  const showCashlessClaim = () => {
    setClaimType('Cashless_Claim');
  }

  const shoeReimbursementClaim = () => {
    setClaimType('Reimbursement_Claim')
  }
  return (
    <div className='container'>
      <h4 className='center'>--How to <strong> Make a Claim </strong>for your Health Insurance--</h4>
      <p>The sole purpose of buying a health insurance plan is to get financial support at the time of medical emergency. Hence, it is important to read the below steps to know how Health Insurance claims process works differently for cashless claimsand
            reimbursement claim requests. </p>
      <SwitchButton showCashlessClaim = {showCashlessClaim} shoeReimbursementClaim = {shoeReimbursementClaim}/>
      <h5 className="center"><b>1 Claim processed every minute^^</b></h5>
      <div id='ClaimDiv' style={{display:'flex',flexDirection:'row'}}>
        {claim[claimType].map((ele)=>{
          return <div className='CashlessClaimDiv'>
            <img src={ele.img} alt=""/>
            <h5>{ele.heading}</h5>
            <p>{ele.desc}</p>
          </div>
        })}
      </div>
      <BuyButton/>
    </div>
  )
}