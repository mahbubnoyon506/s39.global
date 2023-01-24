import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MineralTable from './MineralTable';
import { Container, Form, InputGroup, Spinner, Table } from "react-bootstrap";
import swal from 'sweetalert';

const debounce = (func, delay) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
};

const MinarelTokens = () => {
    const navigate = useNavigate();
    const [ammount, setAmmount] = useState(0.00);
    const [mintingBot, setMintingBot] = useState("Minting Bot 01");
    const [mintingAmount, setMintingAmount] = useState(100000);
    const [neededSPoint, setNeededSPoint] = useState(450);
    const [amountChange, setAmountChange] = useState(false);
    const inputField = useRef(null);
    const [convertedS, setConvertedS] = useState("0.00");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const handleChange = debounce(function () {
            if (!/^\d*[.]?\d*$/.test(this.value) || parseFloat(this.value) < 0) {
                this.value = '';
            } else {
                this.value = parseFloat(this.value).toFixed(2);
            }
        }, 250);

        inputField.current?.addEventListener('change', handleChange);
        inputField.current?.addEventListener('paste', (event) => {
            const clipboardData = event.clipboardData || window.clipboardData;
            const pastedData = clipboardData.getData('Text');
            if (/^\d*[.]?\d*$/.test(pastedData)) {
                this.value = pastedData;
            }
            event.preventDefault();
        });

        return () => {
            inputField.current?.removeEventListener('change', handleChange);
            inputField.current?.removeEventListener('paste', (event) => {
                const clipboardData = event.clipboardData || window?.clipboardData;
                const pastedData = clipboardData.getData('Text');
                if (/^\d*[.]?\d*$/.test(pastedData)) {
                    this.value = pastedData;
                }
                event.preventDefault();
            });
        };
    }, []);


    const onchangeAmmountValue = async (e) => {

        if (/^\d*[.]?\d*$/.test(e.target.value)) {
            setAmmount(parseFloat(e.target.value).toFixed(2));
            // setAmountChange(!amountChange);
            let currentAmount = parseFloat(e.target.value);
            let convertToS = currentAmount * 1.30;
            if (convertToS) {
                setConvertedS(() => convertToS.toFixed(2));
            }
            else {
                setConvertedS(() => "0.00");
            }
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if ((convertedS >= neededSPoint)) {
            navigate(`/claimtoken/${parseFloat(neededSPoint).toFixed(2)}/${convertedS}`)
        }
        else {
            swal({
                text: `You need minimum ${parseFloat(neededSPoint).toFixed(2)?.toLocaleString('en-US')} S Point for minting`,
                icon: "warning",
                button: "OK!",
                className: "modal_class_success",
            });
        }
        // else {
        //     swal({
        //         text: "Please enter an amount greater than 10.00",
        //         icon: "warning",
        //         button: "OK!",
        //         className: "modal_class_success",
        //     });
        // }
    }

    const changeMintingBot = (e) => {

        setMintingBot(e.target.value);
        // setMintingAmount()
        // console.log(e.target.value);

        if (e.target.value === "Minting Bot 01") {
            setMintingAmount(() => 100000);
            setNeededSPoint(() => 450);
        }
        else if (e.target.value === "Minting Bot 02") {
            setMintingAmount(() => 333333);
            setNeededSPoint(() => 1500);
        }
        else if (e.target.value === "Minting Bot 03") {
            setMintingAmount(() => 666666);
            setNeededSPoint(() => 3000);
        }
        else if (e.target.value === "Minting Bot 04") {
            setMintingAmount(() => 3333333);
            setNeededSPoint(() => 15000);
        }
        else if (e.target.value === "Minting Bot 05") {
            setMintingAmount(() => 6666666);
            setNeededSPoint(() => 30000);
        }
        else if (e.target.value === "Minting Bot 06") {
            setMintingAmount(() => 33333333);
            setNeededSPoint(() => 150000);
        }
        else if (e.target.value === "Minting Bot 07") {
            setMintingAmount(() => 50000000);
            setNeededSPoint(() => 250000);
        }
    }
    return (
        <div className='py-2 bg-darkblue'>
            <div className='container' style={{ overflow: 'hidden' }}>
                <h2 className='dashboard-title text-center py-5'>Mineral Tokens</h2>
                <div className='row g-5'>
                    <div className='col-lg-4'>
                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
                            <div>
                                <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
                                <p className="primary text-center" style={{ fontSize: '12px' }}>(Available Amount)</p>
                                <p className="circle-title text-center">s39</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
                            <div>
                                <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
                                <p className="primary text-center" style={{ fontSize: '12px' }}>(Available Amount)</p>
                                <p className="circle-title text-center">s point</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: `0px 0px 15px 15px #33518C` }}>
                            <div>
                                <p className="primary text-center" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0px' }}>$0</p>
                                <p className="primary text-center" style={{ fontSize: '12px' }}>(Available Amount)</p>
                                <p className="circle-title-3rd-child text-center">MINERAL TOKEN</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <Card className='' style={{ borderRadius: '30px', background: '#262626' }}>
                        <Card.Body>
                            <div className='d-flex justify-content-between align-items-center primary'>
                                <p style={{ fontSize: '18px', fontWeight: '700' }}>Mineral minting</p>
                                {(ammount > 0) && <p style={{ fontSize: '18px', fontWeight: '700' }} className="text-warning">You can get {convertedS} S Points by mining</p>}
                                <p style={{ fontSize: '18px', fontWeight: '700' }}>{convertedS} S Point</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex justify-content-between primary pb-2'>
                                    <button className='border-0 primary px-3 py-2 mineralMintingButton' disabled style={{ background: '#000' }}>Convert To S Point</button>
                                    {/* <input className='w-100 ps-1' type="text" name="" id="" placeholder='0.00' /> */}
                                    <InputGroup className="w-100 ps-1">
                                        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" type="number" pattern="[0-9]*" inputmode="numeric" step="0.01" min={0.00} placeholder="0.00" defaultValue={"0.00"} ref={inputField} onChange={onchangeAmmountValue} />
                                    </InputGroup>
                                </div>
                                <div className='d-flex justify-content-between primary pb-2'>
                                    <button className='border-0 primary px-3 py-2 mineralMintingButton' disabled style={{ background: '#000' }}>Amount</button>

                                    <InputGroup className="w-100 ps-1">
                                        <Form.Control aria-label="Amount (to the nearest dollar)" type="text" 
                                        // value={mintingAmount?.toLocaleString('en-US')} 
                                        value={neededSPoint?.toLocaleString('en-US')}
                                        onChange={e => setMintingAmount(e.target.value)} readOnly />
                                    </InputGroup>

                                </div>
                                <div className='d-flex justify-content-between primary pb-2'>
                                    <button className='border-0 primary px-3 py-2 mineralMintingButton' disabled style={{ background: '#000'  }}>Select Minting Bot</button>
                                    <select className='w-100' name="" id="" value={mintingBot} onChange={changeMintingBot}>
                                        <option value="Minting Bot 01">Minting Bot 01</option>
                                        <option value="Minting Bot 02">Minting Bot 02</option>
                                        <option value="Minting Bot 03">Minting Bot 03</option>
                                        <option value="Minting Bot 04">Minting Bot 04</option>
                                        <option value="Minting Bot 05">Minting Bot 05</option>
                                        <option value="Minting Bot 06">Minting Bot 06</option>
                                        <option value="Minting Bot 07">Minting Bot 07</option>
                                    </select>
                                </div>
                                <p style={{ fontSize: '18px', fontWeight: '700' }} className="text-warning my-2 text-center">You need {neededSPoint?.toLocaleString('en-US')} S Point for minting</p>
                                <input className='primary w-100 border-0 py-2 mb-2 mt-0 fs-lg-4 text-uppercase' style={{ background: '#165CA9' }} type="submit" value="Start Minting" />
                            </form>
                        </Card.Body>
                    </Card>
                </div>
                {/* <div className='mb-5'>
                    <MineralTable />
                </div> */}
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