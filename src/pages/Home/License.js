import React from 'react';
import graph from '../../assets/images/coin2.png'

function License() {
    return (

            <div className='container py-5'>
                <div className='row align-items-center' >
                    <div className='col-md-6' style={{ backgroundImage: 'radial-gradient(closest-side at 50% 60%, #362B24, #362A24, #262228, #000A17)' }}>
                        <div style={{maxWidth: '400px'}}>
                            <img className='img-fluid' src={graph} alt="" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        {/* <p className='fs-1 fw-bold'>LOOKING AT SOFTWARE MINING LICENSES (NODE)</p> */}
                        <p className='nodeTitle text-start'>What is S39 Token?</p>
                        <p className='nodeText'>S39 token is the community driven token established in the year 2021 with the purpose to create multi-decentralized utility projects to enhance the community to become business community towards financial freedom community.
                            <br />
                            S39 token is the main token use in S39 global ecosystem for the transactions in the identified business projects, such as Mineral, Agriculture, Gold, Real Estate etc etc.
                        </p>

                    </div>
                </div>
                <div className='pt-5'>
                    <h5 className='nodeTitle'>The Strength of S39 Token</h5>
                    <p className='nodeText primary'>The strength of S39 token is backed by 10.39 billion value of gold at 999.9% purity level SKR (Save Keeping Receipt) gold certificate guarantee no. 93-010-L-50.</p>
                </div>
            </div>

    )
}

export default License;
