import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { AiFillCalendar, AiFillThunderbolt } from 'react-icons/ai';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Token.css';


const ClaimToken = () => {
    const [age, setAge] = React.useState("");
    const [dateEarlier, setDateEarlier] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        // Get the current date
        var currentDate = new Date();

        // Add 15 days to the current date
        currentDate.setDate(currentDate.getDate() + 15);

        // Format the date as "mm/dd/yyyy"
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var day = currentDate.getDate().toString().padStart(2, '0');
        var formattedDate = month + '/' + day + '/' + currentDate.getFullYear();

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
            var formattedDate = month + '/' + day + '/' + currentDate.getFullYear();

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
            var formattedDate = month + '/' + day + '/' + currentDate.getFullYear();

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

    today = mm + '/' + dd + '/' + yyyy;

    console.log(today); // Output: "01/05/2023"

    return (
        <div className='py-5 bg-darkblue' style={{ minHeight: "100vh" }}>
            <div className='container' style={{ overflow: 'hidden' }}>
                <div className="">
                    <div className=''>
                        <Card className='primary py-2' style={{ borderRadius: '30px', background: '#262626' }}>
                            <Card.Body>
                                <div className='d-md-flex justify-content-between align-items-center pb-2'>
                                    <div>
                                        <p className='mb-0 text-primary'>#Pool 1</p>
                                        <p className='mb-0'>10% APR</p>
                                    </div>
                                    <div >
                                        {/* <Button sx={{ maxWidth: '220px' }} variant='contained'>Pool duration: 30Days</Button> */}
                                        <FormControl sx={{ m: 1, minWidth: "220px", backgroundColor: "#1976d2", color: "#fff" }} className="handleReducePadding rouneded">
                                            <Select
                                                value={age}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className="text-light handleReducePadding rouneded"
                                            >
                                                <MenuItem value="" className="text-uppercase">POOL DURATION: 15 DAYS</MenuItem>
                                                <MenuItem value={30} className="text-uppercase">POOL DURATION: 30 DAYS</MenuItem>
                                                <MenuItem value={45} className="text-uppercase">POOL DURATION: 45 DAYS</MenuItem>
                                                <MenuItem value={60} className="text-uppercase">POOL DURATION: 60 DAYS</MenuItem>
                                            </Select>
                                            {/* <FormHelperText>Without label</FormHelperText> */}
                                        </FormControl>

                                    </div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <p>Min Stake: 10 S POINTS</p>
                                    <p>Max Stake: 2500000 S POINTS</p>
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