import React from 'react';
import './Home.css'



function DesList() {
    return (
        <div className='' style={{ backgroundImage: 'radial-gradient(closest-side at 60% 55%, #202020, #141414, #141414, black)' }}>
            <div className=' licenseDiv '>

                <div className='card1 mt-5'>
                    <p className='absoluteNumber'>1</p>
                    <ul>
                        <li>By owning S39 token, anyone from the community is able to subscribe to this partnership program. The S39 token can be utilized further to participate in the listed business projects in S39 Global Super D’Apps.</li>
                    </ul>
                </div>

                <div className='card2  mt-5'>
                    <p className='absoluteNumber'>2</p>
                    <ul>
                        {/* <li>All blockchain transactions must pass through nodes as they validate the transactions via a 'consensus mechanism', aka algorithm (mathematical calculations). Multiple nodes must agree that the transaction is legitimate by 'confirmation' before it is agreed to be final.</li> */}
                        <li>Minting crypto is the process of generating new coins by authenticating data, creating new blocks, and recording the information onto the blockchain through a “proof of stake” protocol. These tokens can then be used to represent different things, such as digital collectibles, gaming assets, or real-world assets.</li>
                    </ul>
                </div>
                <div className='card3 mt-5'>
                    <p className='absoluteNumber'>3</p>
                    <ul>
                        <li>Utilizing S39 GLOBAL proprietary software, you can create a portfolio of tangible commodities . By converting S39 token to S points, one can purchase a Minting Power license, which you can earn  from several business projects listed in Super D’Apps, all from the comfort and convenience of your own home.</li>
                    </ul>
                </div>
                <div className='card4 mt-5 mb-5'>
                    <p className='absoluteNumber'>4</p>
                    <ul>
                        <li>Each blockchain has a different protocol or way of validating transactions e.g. the Bitcoin protocol is different to that of Ethereum and has a different means of 'consensus'. Thus, what a node actually does in any given blockchain protocol will vary.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DesList;
