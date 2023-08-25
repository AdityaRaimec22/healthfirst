import React, { useState } from 'react'
import planData from './plans.json'
import { Link } from 'react-router-dom';
import './Advantage.css'

export default function Plans() {
    const [ageGroup, setAgeGroup] = useState('18-25');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const Details = "Detail";
    const changePlan = (inputText) => {
        let newInput = inputText.toString();
        setAgeGroup(newInput);
    }

    const openModal = (plan) => {
        setSelectedPlan(plan);
    }

    const navigateFunc = () => {
        document.location.href = '/ProposerDetails'
    }

    return (
        <div className='container'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {planData.plans.ageGroup.map((ele) => {
                    return <div style={{ margin: '10px',border:'2px solid white',borderRadius:'10px',padding:'10px' }} onClick={() => changePlan(ele.age)}>Age Group: {ele.age}</div>
                })}
            </div>
            <div >
                {planData.plans.plan[ageGroup].map((ele) => {
                    return <div style={{ display: 'flex', flexDirection: 'row',border:'3px solid white',borderRadius:'15px',margin:'20px' }}>
                        <div style={{marginLeft:'20px'}}>
                            <h4 >{ele.heading}</h4>
                            {ele.tags.map(tag => (
                                <div class="tag" style={{border:'1px solid white'}}>{tag}</div>
                            ))}
                            <a href="">View More</a>
                            <h6 style={{color:'green'}}>{ele.Discount}</h6>
                            </div>
                            <div style={{position:'absolute',right:'400px'}}>
                            
                                    <h5>{ele.coverAmount}</h5>
                                    <button type="button" onClick={() => openModal(ele)} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        {ele.amountPerMonth}
                                    </button>
                                    <div>{ele.amountAnnually}</div>
                                
                            </div>
                        
                    </div>

                })}
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedPlan && Details}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>{selectedPlan && selectedPlan.heading}</div>
                            <div>{selectedPlan && selectedPlan.amountPerMonth}</div>
                            <div>{selectedPlan && selectedPlan.tags}</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button onClick={navigateFunc} type="button" className="btn btn-dark">Proceed for proposal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
