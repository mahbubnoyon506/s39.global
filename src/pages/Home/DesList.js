import React from 'react';
import './Home.css'



function DesList() {
    return (
        <div className='' style={{ backgroundImage: 'radial-gradient(closest-side at 60% 55%, #202020, #141414, #141414, black)'}}>
            <div className=' licenseDiv '>
            <div className='card1 mt-5'>
                <p className='absoluteNumber'>1</p>
            <ul>
                <li> Nodes enforce the rules of the protocol.</li>
            </ul>
            </div>
            <div  className='card2  mt-5'>
            <p className='absoluteNumber'>2</p>
            <ul>
                <li>All blockchain transactions must pass through nodes as they validate the transactions via a 'consensus mechanism', aka algorithm (mathematical calculations). Multiple nodes must agree that the transaction is legitimate by 'confirmation' before it is agreed to be final.</li>
            </ul>
            </div>
            <div className='card3 mt-5'>
            <p className='absoluteNumber'>3</p>
            <ul>
                <li>Some nodes contain full transaction history.</li>
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
