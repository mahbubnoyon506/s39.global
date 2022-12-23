import React from 'react';
import image2 from '../../../../../src/assets/images/icon/icons8-bitcoin-48.png'


import './goals.css'

const Goals = () => {
    return (
        <div>


            <div className='row g-3'>
                <div className='col-12 col-lg-6'>
                    <h2 className='text-center text-white mb-5'>GOALS</h2>
                    <div className=''>
                        <div className=' d-flex justify-content-end'>
                            <span className='text-white newText mb-2 rounded px-3'>New Goal</span>
                        </div>
                        {/* <span className='text-white position-absolute  end-0 newText'>New Goal</span> */}
                        <p className='ps-3 goalsBg py-3 text-white'>Lorem ipsum dolor sit</p>
                    </div>

                    <div className='text-white'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <div>
                            <div>
                                <div class="row gap-2">

                                    <div class="col-12 col-md-4 p-2 rounded goalBg">
                                        <div>
                                            <img src={image2} alt="" style={{ width: "30px" }} />
                                            <div className='line'> </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 goalBg">
                                        hello
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-6'>
                    <div className='text-center'>
                        <h3 className='text-white'>Total Mined value</h3>
                        <h2 className='text-white mt-5'>$0</h2>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Goals;