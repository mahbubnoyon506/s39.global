import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineVerticalAlignBottom } from 'react-icons/ai';
import { MdVerticalAlignTop } from 'react-icons/md';

const BackToTop = () => {
    const [backtoTop, setBacktoTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setBacktoTop(true)
            } else {
                setBacktoTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };


    return (
        <div>
            <Button
                sx={{
                    fontWeight: '700',
                    color: '#000A17',
                    borderRadius: '45px',
                    background: '#FFC000',
                    '&:hover': { background: '#09626C', color: '#fff' },
                    bottom: '10px', right: '10px', position: 'fixed', opacity: '0.8'
                }}
                variant="contained" className='m-1 text-4xl text-red-600 opacity-80' onClick={backtoTop ? scrollUp : scrollToBottom}>
                {
                    backtoTop ?
                        <MdVerticalAlignTop size={25} color='' />
                        :
                        <AiOutlineVerticalAlignBottom size={25} color='' />
                }
            </Button >
        </div>
    );
};

export default BackToTop;