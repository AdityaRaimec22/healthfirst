import React from 'react'
import BuyButton from './BuyButton'
import SwitchButton from './SwitchButton'

export default function Claim() {
  const BigClaimDiv = document.getElementById('ClaimDiv')
  const ClaimDiv = document.getElementsByClassName('CashlessClaimDiv')[0];
  const claim = {
    "Cashless_Claim": [
      {
        "img":"img1",
        "heading":"heading1",
        "desc":"desc1"
      },
      {
        "img":"img1",
        "heading":"heading1",
        "desc":"desc1"
      },
      {
        "img":"img1",
        "heading":"heading1",
        "desc":"desc1"
      },
      {
        "img":"img1",
        "heading":"heading1",
        "desc":"desc1"
      }
    ],
    "Reimbursement_Claim":[
      {
        "img":"img2",
        "heading":"heading2",
        "desc":"desc2"
      },
      {
        "img":"img2",
        "heading":"heading2",
        "desc":"desc2"
      },
      {
        "img":"img2",
        "heading":"heading2",
        "desc":"desc2"
      },
      {
        "img":"img2",
        "heading":"heading2",
        "desc":"desc2"
      }
    ]
  }

  const showCashlessClaim = () => {
    BigClaimDiv.innerText = '';
    claim.Cashless_Claim.forEach((ele)=>{
      const img = document.createElement('img');
      img.src = ele.img
      img.alt = '';

      const heading = document.createElement('h5');
      heading.textContent = ele.heading;

      const desc = document.createElement('p');
      desc.textContent = ele.desc;

      ClaimDiv.appendChild(img);
      ClaimDiv.appendChild(heading);
      ClaimDiv.appendChild(desc);

      BigClaimDiv.appendChild(ClaimDiv);
    })
  }

  const shoeReimbursementClaim = () => {
    BigClaimDiv.innerText = '';
    claim.Reimbursement_Claim.forEach((ele)=>{
      const img = document.createElement('img');
      img.src = ele.img
      img.alt = '';

      const heading = document.createElement('h5');
      heading.textContent = ele.heading;

      const desc = document.createElement('p');
      desc.textContent = ele.desc;

      ClaimDiv.appendChild(img);
      ClaimDiv.appendChild(heading);
      ClaimDiv.appendChild(desc);

      BigClaimDiv.appendChild(ClaimDiv);
    })
  }
  return (
    <div className='container'>
      <h4 className='center'>--How to <strong> Make a Claim </strong>for your Health Insurance--</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam exercitationem, itaque necessitatibus, temporibus illo velit ducimus asperiores molestiae, nam repudiandae magnam commodi explicabo quisquam minima sequi libero consectetur perferendis ipsum neque iste facilis expedita?</p>
      <SwitchButton showCashlessClaim = {showCashlessClaim} shoeReimbursementClaim = {shoeReimbursementClaim}/>
      <h5 className="center"><b>1 Claim processed every minute^^</b></h5>
      <div id='ClaimDiv'>
        {claim.Cashless_Claim.map((ele)=>{
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