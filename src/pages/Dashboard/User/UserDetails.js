import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { walletaddress } = useParams();
    const [customerData, setCustomerData] = useState('')

    useEffect(() => {
        (async () => {
            await axios.get(`https://backend.dslcommerce.com/api/users/${walletaddress}`)
                .then(res => {
                    setCustomerData(res?.data?.result)
                }
                )
        }
        )()
    }, [walletaddress])

    console.log(customerData)

    return (
        <div className=''>
            <h3 className='dashboard-title'> User Details: </h3>
            <div >
                <p className='text-white'>Email: {customerData?.email || 's39global@gmail.com'} </p>
                <p className='text-white'> Wallet Address: {customerData?.walletAddress || '0x6f1aa3bb105886e67a96ded4b6e32168c03becb0'}</p>
                <p className='text-white'>Customer Role : {customerData?.role || 'Admin'}</p>
                <p className='text-white'>Referrel: {customerData?.myReferralCode || '7OXVIC'}</p>
                <p className='text-white'>Account Created : {customerData?.createdAt || '1.1.2023'} </p>
            </div>
            <Link className='btn btn-success' to='/admin/dashboard'> <MdArrowBack/> Back</Link>
        </div>

    );
};

export default UserDetails;