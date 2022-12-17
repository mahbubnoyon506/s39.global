import React from 'react';



function DesList() {
    return (
        <div className='licenseDiv' style={{ backgroundImage: 'radial-gradient(closest-side at 30% 55%, #393939, #393939, #1A1A1A, black)'}}>
            <div className='card1'>
            <ul>
                <li> Nodes enforce the rules of the protocol.</li>
            </ul>
            </div>
            <div  className='card2'>
            <ul>
                <li>All blockchain transactions must pass through nodes as they validate the transactions via a 'consensus mechanism', aka algorithm (mathematical calculations). Multiple nodes must agree that the transaction is legitimate by 'confirmation' before it is agreed to be final.</li>
            </ul>
            </div>
            <div className='card3'>
            <ul>
                <li>Some nodes contain full transaction history.</li>
            </ul>
            </div>
            <div className='card4'>
            <ul>
                <li>Each blockchain has a different protocol or way of validating transactions e.g. the Bitcoin protocol is different to that of Ethereum and has a different means of 'consensus'. Thus, what a node actually does in any given blockchain protocol will vary.</li>
            </ul>
            </div>
        </div>
    )
}

export default DesList;
