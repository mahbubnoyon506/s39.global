import React from 'react';
import graph from '../../assets/images/coin.png'

function License() {
    return (
        <div>
            <div className='container py-5'>
                <div className='row g-5 align-items-center'>
                    <div className='col-lg-5 col-sm-12'>
                        <img width="100%" src={graph} alt="" />
                    </div>
                    <div className='col-lg-7 col-sm-12 text-white'>
                        {/* <p className='fs-1 fw-bold'>LOOKING AT SOFTWARE MINING LICENSES (NODE)</p> */}
                        <p className='nodeTitle primary text-start pb-4'>What is S39 Token?</p>
                        <p className='nodeText primary'>S39 token is the community driven token established in the year 2021 with the purpose to create multi-decentralized utility projects to enhance the community to become business community towards financial freedom community.
                        <br /><br />
                        S39 token is the main token use in S39 global ecosystem for the transactions in the identified business projects, such as Mineral, Agriculture, Gold, Real Estate etc etc.
                        </p>          

                    </div>
                </div>
                <div className='pt-5'>
                    <h5 className='nodeTitle primary text-start pb-4'>The Strength of S39 Token</h5>
                    <p className='nodeText primary'>The strength of S39 token is backed by 10.39 billion value of gold at 999.9% purity level SKR (Save Keeping Receipt) gold certificate guarantee no. 93-010-L-50.</p>
                </div>
            </div>
        </div>
    )
}

export default License;
