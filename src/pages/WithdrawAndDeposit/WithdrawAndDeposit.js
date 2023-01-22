import React, { useContext, useEffect, useRef, useState } from 'react';
import './WithdrawAndDeposit.css';
import { Card } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import QRCode from 'qrcode';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';
import copy from "copy-to-clipboard";
import Swal from 'sweetalert2';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
];


const WithdrawAndDeposit = () => {
    const [tabs, setTabs] = useState("deposit");
    const [src, setSrc] = useState('');
    const { user, openWalletModal, getBalanceTestnet, closeWalletModal, logOut, setUserRefetch, userRefetch } = useContext(S39GlobalContext);
    let walletAddressTemplate = useRef();
    const [copyWalletAddress, setCopyWalletAddress] = useState("");


    useEffect(() => {
        const template = walletAddressTemplate.current;
        console.log(template)
        QRCode.toDataURL(user?.walletAddress)
            .then(setSrc);
    }, [])

    const copyToClipboardBtn = () => {
        copy(user?.walletAddress ? user?.walletAddress : "");

        // copyTextAffiliateLink !== ""
        // ? swal({
        //     title: "Copied",
        //     text: `You have copied "${copyTextAffiliateLink}"`,
        //     icon: "success",
        //     button: "OK",
        //     className: "modal_class_success",
        // })
        // : swal({
        //     title: "Not Copied",
        //     text: "Nothing to Copy",
        //     icon: "warning",
        //     button: "OK",
        //     className: "modal_class_warning",
        // });

        // alert(`You have copied "${copyTextAffiliateLink}"`);

        if (user?.walletAddress !== "") {
            // swal({
            //     title: "Copied",
            //     text: `You have copied "${copyTextAffiliateCode}"`,
            //     icon: "success",
            //     button: "OK",
            //     className: "modal_class_success",
            // })

            const wrapper = document.createElement("div");
            wrapper.innerHTML = `<p class='text-break text-white fs-5'>You have copied "${user?.walletAddress}"</p>`;

            Swal.fire(
                {
                    // title: 'Successfully updated your Full Name.',
                    html: wrapper,
                    icon: "success",
                    customClass: "modal_class_success",
                }
            )


        }
        else {
            // swal({
            //         title: "Not Copied",
            //         text: "Nothing to Copy",
            //         icon: "warning",
            //         button: "OK",
            //         className: "modal_class_warning",
            //  });

            const wrapper = document.createElement("div");
            wrapper.innerHTML = `<p class='text-break text-white fs-5'>Nothing to Copy</p>`;

            Swal.fire(
                {
                    html: wrapper,
                    icon: "warning",
                    customClass: "modal_class_success",
                }
            )
        }

    }

    const [selectedItem, setSelectedItem] = useState('');
    console.log('got item', selectedItem)

    return (
        <div className='py-5 bg-darkblue' style={{ minHeight: "100vh" }}>
            <div className='container'>
                <div className='d-flex justify-content-center align-itmes-center mb-3 pb-2' style={{ gap: "15px" }}>
                    <button className={`${(tabs === "deposit") ? "tabsButtonActive" : "tabsButton"} ps-3 pt-2 pb-2 pe-3 rounded border-0`} onClick={() => setTabs(() => "deposit")}>Deposit</button>
                    <button className={`${(tabs === "withdraw") ? "tabsButtonActive" : "tabsButton"} ps-3 pt-2 pb-2 pe-3 rounded border-0`} onClick={() => setTabs(() => "withdraw")}>Withdraw</button>
                </div>
                <div>

                    {(tabs === "withdraw") &&

                        <div className=''>
                            <Card className='primary py-2' style={{ background: '#262626' }}>
                                <Card.Body>
                                    <div>
                                        <div className='d-flex flex-sm-row flex-column justify-content-center align-items-center mb-3' style={{ gap: "15px" }}>
                                            <div className='handleWidthInput'>
                                                <label className='pb-2'>Cryplocoin</label> <br />
                                                <select className='w-100 bg-black border border-secondary rounded ps-2 py-2 text-light' onChange={e => setSelectedItem(e.target.value)}>
                                                    <option value="BTC">BTC</option>
                                                    <option value="BNB">BNB</option>
                                                    <option value="ETH">ETH</option>
                                                    <option value="S39">S39</option>
                                                    <option value="USDSC">USDSC</option>
                                                    <option value="USDT">USDT</option>
                                                    <option value="BUSD">BUSD</option>
                                                    <option value="DSL">DSL</option>
                                                </select>
                                            </div>

                                            <div className='handleWidthInput'>
                                                <label className='pb-2 ps-1'>Available 250.00000000000 {selectedItem}</label> <br />
                                                <input type="text" className='w-100 bg-black border border-secondary rounded ps-2 py-2 text-light' placeholder='Enter Amount' />
                                            </div>
                                        </div>
                                        <div className='d-flex flex-sm-row flex-column justify-content-center align-items-center    ' style={{ gap: "15px" }}>
                                            <div className='handleWidthInput '>
                                                <label className='pb-2 ps-1'>Available 250.00000000000 {selectedItem}</label> <br />
                                                <input type="text" className='w-100 bg-black border border-secondary rounded ps-2 py-2 text-light' placeholder='Enter Amount' />

                                                <div className='mt-3'>
                                                    <div className='row'>
                                                        <div className='col'> 

                                                            <p>Fee per transation</p>
                                                            <p>Maximum Withdraw Limit</p>
                                                            {/* <p>Once you confirm your purchase, there is nothing more for you to do until the Pre-Sale concludes. Tolens will be sent to your Wallet shortly after purchase</p> */}
                                                        </div>
                                                        <div className='col'>
                                                            <p>: 0.0200000000 {selectedItem}</p>
                                                            <p>: 10000.0000000 {selectedItem}</p>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='handleWidthInput '>

                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-center align-itmes-center mb-3 pb-2' style={{ gap: "15px" }}>

                                            <button className="tabsButtonActive ps-3 pt-2 pb-2 pe-3 rounded text-light border-0" onClick={() => setTabs(() => "withdraw")}>SEND</button>
                                        </div>

                                        <div className='shadow mb-3 rounded' >
                                            <div className='bg-orange-grad rounded-top'>
                                                <p className='ps-3 py-2'>Withdraw History</p>
                                            </div>
                                            <div className='d-flex justify-content-center justify-content-md-end align-itmes-center'>
                                                <input type="text" className=' bg-black border border-secondary rounded ps-2 py-2 text-light' placeholder="Status" readOnly disabled />
                                            </div>
                                            <div className='mt-3'>
                                                <TableContainer component={Paper} style={{ background: "transparent", color: "white" }}>
                                                    <Table sx={{ minWidth: 650, color: "white" }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell className='text-light'>COIN</TableCell>
                                                                <TableCell align="center" className='text-light'>Date & Time</TableCell>
                                                                <TableCell align="center" className='text-light'>Send Amount</TableCell>
                                                                <TableCell align="center" className='text-light'>Fees</TableCell>
                                                                <TableCell align="center" className='text-light'>Receive Amount</TableCell>
                                                                <TableCell align="center" className='text-light'>Status</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <TableRow
                                                                    key={row.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='text-light'
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </TableCell>
                                                                    <TableCell align="center">{row.calories}</TableCell>
                                                                    <TableCell align="center">{row.fat}</TableCell>
                                                                    <TableCell align="center">{row.carbs}</TableCell>
                                                                    <TableCell align="center">{row.protein}</TableCell>
                                                                    <TableCell align="center">{row.protein}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </div>
                                        </div>

                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    }

                    {(tabs === "deposit") &&

                        <div className=''>
                            <Card className='primary py-2' style={{ background: '#262626' }}>
                                <Card.Body>
                                    <div>
                                        <div className='d-flex  flex-column justify-content-center align-items-center mb-3'>
                                            <div className='handleWidthDiv'>
                                                <label className='pb-2'>Select Coin</label> <br />
                                                <select className='w-100 bg-black border border-secondary rounded ps-2 py-2 text-light'>
                                                    <option value="BTC">BTC</option>
                                                    <option value="BNB">BNB</option>
                                                    <option value="ETH">ETH</option>
                                                    <option value="S39">S39</option>
                                                    <option value="USDSC">USDSC</option>
                                                    <option value="USDT">USDT</option>
                                                    <option value="BUSD">BUSD</option>
                                                    <option value="DSL">DSL</option>
                                                </select>
                                            </div>
                                            <div className='d-flex justify-content-center align-itmes-center  handleWidthDiv my-3'>
                                                <input type="text" className='w-100 bg-black border border-secondary  ps-2 py-2 text-light' value={user?.walletAddress} style={{ borderRadius: "5px 0px 0px 5px", }} readOnly disabled />
                                                <button className="tabsButtonActive ps-3 pt-2 pb-2 pe-3  text-light border-0" onClick={() => copyToClipboardBtn()}>Copy</button>
                                            </div>
                                            <div>
                                                <img src={src} alt="barcode" className="img-fluid handleBarcode" ref={walletAddressTemplate} />
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-center align-itmes-center mb-3 pb-2 '>


                                        </div>

                                        <div className='shadow mb-3 rounded' >
                                            <div className='bg-orange-grad rounded-top'>
                                                <p className='ps-3 py-2'>Deposit History</p>
                                            </div>
                                            <div className='d-flex justify-content-center justify-content-md-end align-itmes-center'>
                                                <input type="text" className=' bg-black border border-secondary rounded ps-2 py-2 text-light' placeholder="Transation ID" readOnly disabled />
                                            </div>
                                            <div className='mt-3'>
                                                <TableContainer component={Paper} style={{ background: "transparent", color: "white" }}>
                                                    <Table sx={{ minWidth: 650, color: "white" }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell className='text-light'>COIN</TableCell>
                                                                <TableCell align="center" className='text-light'>Date & Time</TableCell>
                                                                <TableCell align="center" className='text-light'>Transation  ID</TableCell>
                                                                <TableCell align="center" className='text-light'>Amount</TableCell>
                                                                <TableCell align="center" className='text-light'>Status</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <TableRow
                                                                    key={row.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='text-light'
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        {row.name}
                                                                    </TableCell>
                                                                    <TableCell align="center">{row.calories}</TableCell>
                                                                    <TableCell align="center">{row.fat}</TableCell>
                                                                    <TableCell align="center">{row.carbs}</TableCell>
                                                                    <TableCell align="center">{row.protein}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </div>
                                        </div>

                                    </div>
                                </Card.Body>
                            </Card>
                        </div>


                    }
                </div>
            </div>




        </div>
    );
};

export default WithdrawAndDeposit;