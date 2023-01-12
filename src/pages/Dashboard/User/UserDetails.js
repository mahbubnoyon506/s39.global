import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState('')

    useEffect(() => {
        (async () => {
            await axios.get(`https://testnetback.s39global.com/api/v1/wallet-user/user/${id}`)
                .then(res => {
                    setUser(res?.data.result)
                }
                )
        }
        )()
    }, [id])

// console.log('getting user details', user)
    return (
        <div className=''>
            <h3 className='dashboard-title'> User Details: </h3>
            <div >
                <p className='text-white'>Email: {user?.email || 's39global@gmail.com'} </p>
                <p className='text-white'> Wallet Address: {user?.walletAddress || '0x6f1aa3bb105886e67a96ded4b6e32168c03becb0'}</p>
                <p className='text-white text-capitalize'>Customer Role : {user?.role || 'Admin'}</p>
                <p className='text-white'>Referrel: {user?.myReferralCode || '7OXVIC'}</p>
                <p className='text-white'>Account Created : {user?.createdAt || '1.1.2023'} </p>
            </div>
            <Link className='btn btn-success' to='/admin/users'> <MdArrowBack /> Back</Link>
        </div>

    );
};

export default UserDetails;