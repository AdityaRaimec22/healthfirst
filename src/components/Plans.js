import React,{useState} from 'react'
import planData from './plans.json'
import './Advantage.css'

export default function Plans() {
    const[ageGroup, setAgeGroup] = useState('18-25');

    const changePlan = (inputText) => {
        let newInput = inputText.toString();
        setAgeGroup(newInput);
    }
    
  return (
    <div className='container'>
      <div style={{display:'flex',flexDirection:'row'}}>
        {planData.plans.ageGroup.map((ele)=>{
            return <div style={{margin:'10px'}} onClick={()=>changePlan(ele.age)}>{ele.age}</div>
        })}
      </div>
      <div>
        {planData.plans.plan[ageGroup].map((ele)=>{
            return <div style={{backgroundColor:'red',margin:'10px'}}>
                <div>{ele.heading}</div>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {ele.amountPerMonth}
                </button>
            </div>
            
        })}
      </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-dark">Proceed for proposal</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}