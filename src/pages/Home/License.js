import React from 'react';
import graph from '../../assets/images/graphpng.png'

function License() {
    return (
        <div style={{ backgroundImage: 'radial-gradient(closest-side at 30% 55%, #393939, #393939, #1A1A1A, black)' }}>
            <div className='container py-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-sm-12'>
                        <img width="100%" src={graph} alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-12 text-white'>
                        {/* <p className='fs-1 fw-bold'>LOOKING AT SOFTWARE MINING LICENSES (NODE)</p> */}
                        <p className='fs-3'>What is S39 Token?</p>
                        <p className='fs-5'>S39 token is the community driven token established in the year 2021 with the purpose to create multi-decentralized utility projects to enhance the community to become business community towards financial freedom community.</p>
                        <p>S39 token is the main token use in S39 global ecosystem for the transactions in the identified business projects, such as Mineral, Agriculture, Gold, Real Estate etc etc.</p>

                        <div>
                            <h5>The Strength of S39 Token</h5>
                            <p>The strength of S39 token is backed by 10.39 billion value of gold at 999.9% purity level SKR (Save Keeping Receipt) gold certificate guarantee no. 93-010-L-50.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default License;
