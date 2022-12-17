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
                        <p className='fs-1 fw-bold'>LOOKING AT SOFTWARE MINING LICENSES (NODE)</p>
                        <p className='fs-3'>WHAT IS A NODE?</p>
                        <p className='fs-5'>Blockchains (cryptocurrencies use blockchains) require nodes to operate. A node is a piece of software that connects to other nodes in the blockchain to create a network. Nodes are where data is stored, received and transmitted. They are crucial to network security and integrity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default License;
