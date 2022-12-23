import React from 'react';
import { RiSurroundSoundFill } from 'react-icons/ri';
import { BsStarFill } from 'react-icons/bs';
import image2 from '../../../../../src/assets/images/icon/icons8-bitcoin-48.png'
import image from '../../../../../src/assets/images/icon/aave.png'


import './goals.css'

const Goals = () => {
    return (
        <div>


            <div className='row g-3'>
                <div className='col-12 col-lg-6'>
                    <h2 className='text-center text-white mb-5'>GOALS</h2>
                    <div className='mb-5'>
                        <div className=' d-flex justify-content-end'>
                            <span className='text-white newText mb-3 rounded px-3'>New Goal</span>
                        </div>
                        {/* <span className='text-white position-absolute  end-0 newText'>New Goal</span> */}
                        <p className='ps-3 goalsBg py-3 text-white'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className='text-white' style={{ marginTop: '200px' }}>
                        <p class="fs-6 text-center">ALL TIME MINED BY LICENSE</p>
                        <div>

                            <div class="row g-2">

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image2} alt="" style={{ width: "30px" }} />
                                                <div className='line'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image} alt="" style={{ width: "30px" }} />
                                                <div className='line2'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image2} alt="" style={{ width: "30px" }} />
                                                <div className='line'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image} alt="" style={{ width: "30px" }} />
                                                <div className='line2'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image2} alt="" style={{ width: "30px" }} />
                                                <div className='line'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image} alt="" style={{ width: "30px" }} />
                                                <div className='line2'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div className=' p-2 rounded goalBg'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <img src={image} alt="" style={{ width: "30px" }} />
                                                <div className='line2'> </div>
                                            </div>
                                            <div className='text-end'>
                                                <p className='mb-0'>$0.00</p>
                                                <span className='text-center me-0'><RiSurroundSoundFill /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-6'>
                    <div className='text-center'>
                        <h5 className='text-white'>Total Mined value</h5>
                        <h2 className='text-white mt-5'>$0</h2>
                    </div>

                    <div className='text-white d-flex align-items-center justify-content-center text-center mt-5'>
                        <div className='bg-1 '>
                            <div className='goals position-relative'>
                                <div>
                                    {/* <span className='starIcon '><BsStarFill className='' /></span> */}
                                </div>
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <div>
                                        <h2>0%</h2>
                                        <p>GOALS</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Goals;