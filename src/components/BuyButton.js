import React from 'react'
import { Link } from 'react-router-dom'

export default function BuyButton() {
  return (
    <div className='container my-3' style={{display:'flex',justifyContent:'center'}}>
      <button className="BuyButton"><Link className="nav-link" to='/plans'> Buy Online</Link></button>
    </div>
  )
}
