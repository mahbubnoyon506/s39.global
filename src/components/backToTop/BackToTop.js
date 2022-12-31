import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
    return (
        <div>
            {
                backtoTop && <Button
                    sx={{
                        borderRadius: "45px",
                        background: "#FFC000",
                        color: "#000",
                        marginRight: "10px",
                        fontWeight: "900",
                        "&:hover": { background: "#FFC000" },
                        bottom: '10px', right: '10px', position: 'fixed', opacity: '0.8'
                    }}
                    variant="contained" className='m-1 text-4xl text-red-600 opacity-80' onClick={scrollUp}><MdVerticalAlignTop size={25} color='#000A17' /></Button >
            }
        </div>
    );
};

export default BackToTop;