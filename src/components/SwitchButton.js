import React from 'react'

export default function SwitchButton(props) {
    let {showCashlessClaim, shoeReimbursementClaim} = props;
    
  return (
    <div className='container'>
        <div className='center'>
        <div className='BigButtonDiv'>
          <div onClick={showCashlessClaim} className='ButtonDiv'>Cashless Claim</div>
          <div onClick={shoeReimbursementClaim} className='ButtonDiv'>Reimbursement Claim</div>
        </div>
      </div>
    </div>
  )
}
