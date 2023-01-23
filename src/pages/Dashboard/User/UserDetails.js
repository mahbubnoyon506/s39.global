import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState('');
    const [RegDate, setRegDate] = useState('')
    const [RegMonth, setRegMonth] = useState('');
    const [RegYear, setRegYear] = useState('');
    const [RegHour, setRegHour] = useState('');
    const [RegMinute, setRegMinute] = useState('');
    const [RegSecond, setRegSecond] = useState('');

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

    useEffect(() => {
        if (user) {
            const date = user?.createdAt.slice(0, 10)
            const date2 = date.split("-")
            const time = user?.createdAt.slice(11, 19)
            const time2 = time.split(":");
            setRegDate(date2[2]);
            setRegMonth(date2[1]);
            setRegYear(date2[0]);
            setRegHour(time2[0]);
            setRegMinute(time2[1]);
            setRegSecond(time2[0]);
        }
    }, [user])
    console.log(RegDate, RegMonth, RegYear, RegHour, RegMinute, RegSecond)

    return (
        <div className=''>
            <h3 className='dashboard-title'> User Details: </h3>
            <div >
                <p className='text-white'>Email: {user?.email || 's39global@gmail.com'} </p>
                <p className='text-white'> Wallet Address: {user?.walletAddress || '0x6f1aa3bb105886e67a96ded4b6e32168c03becb0'}</p>
                <p className='text-white text-capitalize'>Customer Role : {user?.role || 'Admin'}</p>
                <p className='text-white'>Referrel: {user?.myReferralCode || '7OXVIC'}</p>
                <p className='text-white'>Account Created : {RegDate} / {RegMonth} / {RegYear} | {RegHour} : {RegMinute} : {RegSecond}</p>
            </div>
            <Link className='btn btn-success' to='/admin/users'> <MdArrowBack /> Back</Link>
        </div>

    );
};

export default UserDetails;