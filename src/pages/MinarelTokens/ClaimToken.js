import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { AiFillCalendar, AiFillThunderbolt } from 'react-icons/ai';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Token.css';
import { useNavigate, useParams } from 'react-router-dom';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';
import coin from '../../assets/images/coin2.png'
import TopButton from '../../components/TopLoginButton/TopButton';
import LoginButton from '../../components/LoginButton/LoginButton';


const ClaimToken = () => {
    const [age, setAge] = React.useState("");
    const [dateEarlier, setDateEarlier] = useState("");
    const { user, openWalletModal, getBalanceTestnet, closeWalletModal, logOut, setUserRefetch, userRefetch } = useContext(S39GlobalContext);
    const { neededSPoint, givenSPoint } = useParams();
    const navigate = useNavigate();
    const [getTheContractDay, setGetTheContractDay] = useState(1000);
    const [daily, setDaily] = useState(0.13);
    const [reward, setReward] = useState(100000);

    useEffect(() => {
        window.scrollTo(0, 0);

        const findingTheDay = () => {
            if (neededSPoint == 450) {
                setGetTheContractDay(() => 1000);
                setDaily(() => 0.13);
                setReward(() => 100000);
            }
            else if (neededSPoint == 1500) {
                setGetTheContractDay(() => 950);
                setDaily(() => 0.14);
                setReward(() => 333333);
            }
            else if (neededSPoint == 3000) {
                setGetTheContractDay(() => 900);
                setDaily(() => 0.15);
                setReward(() => 666666);
            }
            else if (neededSPoint == 15000) {
                setGetTheContractDay(() => 850);
                setDaily(() => 0.16);
                setReward(() => 3333333);
            }
            else if (neededSPoint == 30000) {
                setGetTheContractDay(() => 800);
                setDaily(() => 0.17);
                setReward(() => 6666666);
            }
            else if (neededSPoint == 150000) {
                setGetTheContractDay(() => 750);
                setDaily(() => 0.18);
                setReward(() => 33333333);
            }
            else if (neededSPoint == 250000) {
                setGetTheContractDay(() => 700);
                setDaily(() => 0.19);
                setReward(() => 50000000);
            }


        }
        findingTheDay();

        // Get the current date
        var currentDate = new Date();

        // Add 15 days to the current date
        currentDate.setDate(currentDate.getDate() + parseFloat(getTheContractDay));

        // Format the date as "mm/dd/yyyy"
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var day = currentDate.getDate().toString().padStart(2, '0');
        var formattedDate = day + '/' + month + '/' + currentDate.getFullYear();

        console.log(formattedDate); // 02/05/2023 (assuming the current date is 2021-01-05)

        setDateEarlier(() => formattedDate);

    }, [])

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log("event", event.target.value, typeof event.target.value);

        if (!event.target.value) {
            // Get the current date
            var currentDate = new Date();

            // Add 15 days to the current date
            currentDate.setDate(currentDate.getDate() + 15);

            // Format the date as "mm/dd/yyyy"
            var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            var day = currentDate.getDate().toString().padStart(2, '0');
            var formattedDate = day + '/' + month + '/' + currentDate.getFullYear();

            console.log(formattedDate); // 02/05/2023 (assuming the current date is 2021-01-05)

            setDateEarlier(() => formattedDate);
        }
        else {
            // Get the current date
            var currentDate = new Date();

            // Add 15 days to the current date
            currentDate.setDate(currentDate.getDate() + event.target.value);

            // Format the date as "mm/dd/yyyy"
            var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            var day = currentDate.getDate().toString().padStart(2, '0');
            var formattedDate = day + '/' + month + '/' + currentDate.getFullYear();

            console.log(formattedDate); // 02/05/2023 (assuming the current date is 2021-01-05)

            setDateEarlier(() => formattedDate);
        }
    };




    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;

    console.log(today); // Output: "01/05/2023"

    return (
        <div className='py-5 bg-darkblue' style={{ minHeight: "55vh" }}>
            <div className='container' style={{ overflow: 'hidden' }}>
                <div className="">
                    <div className=''>
                        <Card className='primary py-2' style={{ borderRadius: '30px', background: '#262626' }}>
                            <Card.Body>
                                <div className='d-md-flex justify-content-between align-items-center pb-2'>
                                    <div>
                                        <p className='mb-0'>Daily {daily}% APR</p>
                                    </div>
                                    <div className='mx-auto text-center mx-md-0 text-md-end mt-2 mt-md-0'>
                                        <Button variant='contained'>Pool duration: {parseFloat(getTheContractDay).toLocaleString("en-US")} Days</Button>


                                    </div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <p>Min Stake: 450 S POINTS</p>
                                    <p>Max Stake: 250,000 S POINTS</p>
                                </div>
                                <div className='pb-4'>
                                    <div className='d-flex justify-content-between align-items-center '>
                                        <div className='d-flex'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#999999' }}>
                                                <AiFillCalendar color='#000' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Stake Date</p>
                                                <p className='mb-0'>{today}</p>
                                                {/* <p className='mb-0'>2/25/2023 12:42:11</p> */}
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#FFE5A1' }}>
                                                <AiFillThunderbolt color='#F1A604' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Maturity Date</p>
                                                <p className='mb-0'>{dateEarlier} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row gx-2'>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Staked</p>
                                        <p className='mb-0 text-center'>{neededSPoint}</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Reward</p>
                                        <p className='mb-0 text-center'>{reward}</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Accumulated</p>
                                        <p className='mb-0 text-center'>{(reward / getTheContractDay).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>Total value locked:</p>
                                        <p className='mb-0'>{(reward / getTheContractDay).toFixed(2)}  POINTS</p>
                                    </div>
                                    {(user?.walletAddress || user?.walletAddress === "undefined")
                                        ? <Button sx={{ width: '100%' }} variant='contained' onClick={() => navigate("/claiming")}>Claim</Button> :

                                        <Button sx={{ width: '100%' }} variant='contained' onClick={() => openWalletModal()}><img style={{ marginLeft: '-15px', marginRight: '-10px' }} src={coin} width={50} alt="" /> LOGIN with Wallet</Button>
                                    }
                                    {/* <LoginButton></LoginButton> */}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* <div className='col-lg-6'>
                        <Card className='primary py-2' style={{ borderRadius: '30px', background: '#262626' }}>
                            <Card.Body>
                                <div className='d-md-flex justify-content-between align-items-center pb-2'>
                                    <div>
                                        <p className='mb-0 text-primary'>#Pool 2</p>
                                        <p className='mb-0'>10% APR</p>
                                    </div>
                                    <div >
                                        <Button sx={{ maxWidth: '220px' }} variant='contained'>Pool duration: 30Days</Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <p>Min Stake: 100 S POINTS</p>
                                    <p>Max Stake: 2500000 S POINTS</p>
                                </div>
                                <div className='pb-4'>
                                    <div className='d-flex justify-content-between align-items-center '>
                                        <div className='d-flex w-50'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#999999' }}>
                                                <AiFillCalendar color='#000' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Stake Date</p>
                                                <p className='mb-0'>2/25/2023 12:42:11</p>
                                            </div>
                                        </div>
                                        <div className='d-flex w-50'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#FFE5A1' }}>
                                                <AiFillThunderbolt color='#F1A604' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Maturity Date</p>
                                                <p className='mb-0'>2/25/2023 12:42:11</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row gx-2'>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Staked</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Reward</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Accumulated</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>Total value locked:</p>
                                        <p className='mb-0'>111.2 S POINTS</p>
                                    </div>
                                    <Button sx={{ width: '100%' }} variant='contained'>Claim</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default ClaimToken;