import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MineralTable from './MineralTable';

const MinarelTokens = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/claimtoken')
    }
    return (
        <div className='py-2 bg-darkblue' >
            <div className='container' style={{ overflow: 'hidden' }}>
                <h2 className='dashboard-title text-center py-5'>Mineral Tokens</h2>
                <div className='row g-5'>
                    <div className='col-lg-4'>
                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
                            <div>
                                <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
                                <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
                                <p className="circle-title text-center">rewards</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
                            <div>
                                <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
                                <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
                                <p className="circle-title text-center">invested</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
                            <div>
                                <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
                                <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
                                <p className="circle-title text-center">Price</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <Card className='' style={{ borderRadius: '30px', background: '#262626' }}>
                        <Card.Body>
                            <div className='d-flex justify-content-between primary'>
                                <p style={{ fontSize: '18px', fontWeight: '700' }}>Mine mineral tokens</p>
                                <p style={{ fontSize: '18px', fontWeight: '700' }}>500 S Point</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex justify-content-between primary pb-2'>
                                    <button className='border-0 primary px-3 py-1' disabled style={{ background: '#000', minWidth: '120px' }}>Amount</button>
                                    <input className='w-100' type="text" name="" id="" />
                                </div>
                                <div className='d-flex justify-content-between primary pb-2'>
                                    <button className='border-0 primary px-3 py-1' disabled style={{ background: '#000', minWidth: '120px' }}>Select Pool</button>
                                    <select className='w-100' name="" id="">
                                        <option value="" disabled>Please select pool</option>
                                        <option value="">Please select pool</option>
                                        <option value="">Please select pool</option>
                                        <option value="">Please select pool</option>
                                    </select>
                                </div>
                                <input className='primary w-100 border-0 py-1 my-2 fs-lg-4' style={{ background: '#165CA9' }} type="submit" value="Mine in this pool" />
                            </form>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mb-5'>
                    <MineralTable />
                </div>
            </div>
        </div>
    );
};

export default MinarelTokens;


// import React from 'react';
// import { Card } from 'react-bootstrap';
// import MineralTable from './MineralTable';

// const MinarelTokens = () => {
//     return (
//         <div className='bg-darkblue' >
//             <div className='container'>
//             <h2 className='dashboard-title'>Mineral Tokens</h2>
//             <div className='row g-5'>
//                 <div className='col-lg-4'>
//                     <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
//                         <div>
//                             <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
//                             <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
//                             <p className="circle-title text-center">rewards</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-lg-4'>
//                     <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
//                         <div>
//                             <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
//                             <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
//                             <p className="circle-title text-center">invested</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-lg-4'>
//                     <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
//                         <div>
//                             <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
//                             <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
//                             <p className="circle-title text-center">Price</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='my-5'>
//                 <Card className='' style={{ borderRadius: '30px', background: '#262626' }}>
//                     <Card.Body>
//                      <div className='d-flex justify-content-between primary'>
//                         <p style={{fontSize: '18px', fontWeight: '700'}}>Mine mineral tokens</p>
//                         <p style={{fontSize: '18px', fontWeight: '700'}}>500 S Point</p>
//                      </div>
//                     <form>
//                         <div className='d-flex justify-content-between primary pb-2'>
//                         <button className='border-0 primary px-3 py-1' disabled style={{background: '#000', minWidth: '120px'}}>Amount</button>
//                         <input className='w-100' type="text" name="" id="" />
//                         </div>
//                         <div className='d-flex justify-content-between primary pb-2'>
//                             <button className='border-0 primary px-3 py-1' disabled style={{background: '#000', minWidth: '120px'}}>Select Pool</button>
//                             <select className='w-100' name="" id="">
//                                 <option value="" disabled>Please select pool</option>
//                                 <option value="">Please select pool</option>
//                                 <option value="">Please select pool</option>
//                                 <option value="">Please select pool</option>
//                             </select>
//                         </div>
//                         <input className='primary w-100 border-0 py-1 my-2 fs-lg-4' style={{background: '#165CA9'}} type="submit" value="Mine in this pool" />
//                     </form>
//                     </Card.Body>
//                 </Card>
//             </div>
//             <div className='mb-5'>
//                 <MineralTable/>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default MinarelTokens;