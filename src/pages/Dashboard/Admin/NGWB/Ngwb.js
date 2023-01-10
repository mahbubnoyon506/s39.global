import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import image from '../../../../assets/images/icon/aave.png'

const Ngwb = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])  
    const cards = [
        {
            "title": "Lorem ipsum dolor",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sapiente quod minima odit magnam veritatis.",
            "date": "Dec 22",
            "image": `${image}`,
            "background": "#68BEE0"
        },
        {
            "title": "Lorem ipsum dolor",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sapiente quod minima odit magnam veritatis.",
            "date": "Dec 22",
            "image": `${image}`,
            "background": "#6C17B8"
        },
        {
            "title": "Lorem ipsum dolor",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sapiente quod minima odit magnam veritatis.",
            "date": "Dec 22",
            "image": `${image}`,
            "background": "#CA009A"
        },
        {
            "title": "Lorem ipsum dolor",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sapiente quod minima odit magnam veritatis.",
            "date": "Dec 22",
            "image": `${image}`,
            "background": "#EC661F"
        },
    ]
    return (
        <div className='row gx-4'>
            <h5 className="dashboard-title">NGWB</h5>
            <div className='col-md-5'>
                {
                    cards.map((card, index) =>
                        <div key={index} className='py-2'>
                            <Card className='' style={{ borderRadius: '10px', background: '#262626' }}>
                                <Card.Body>
                                    <div className='d-flex justify-content-end'><p style={{ color: '#fff', fontSize: '12px' }}>{card.date}</p></div>
                                    <div className='d-flex justify-content-between '>
                                        <div className='d-flex align-items-center'>
                                            <img className='' src={card.image} alt="" style={{ width: "30px" }} />
                                            <p className='ms-3 primary fs-5'>{card.title}</p>
                                        </div>
                                        <div style={{ width: '5px', height: '40px', background: `${card.background}` }}></div>
                                    </div>
                                    <p className='primary pt-3'>{card.content}</p>
                                    <div className='d-flex justify-content-end'>
                                        <Button sx={{ background: `${card.background}`, borderRadius: '45px', padding: '0px 10px', '&:hover': { background: `${card.background}` } }} variant='contained'>NEW</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
            <div className='col-md-7 pt-2'>
                <Card className='' style={{ borderRadius: '10px', background: '#262626' }}>
                    <Card.Body>
                       <p className='fs-4 fw-bold text-uppercase primary border-bottom pb-1 border-2' >burn notice: natg</p>
                       <p className='primary'>NATG: Community</p>
                       <p className='primary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Perferendis doloremque eos ab deserunt odio ipsum ad esse. Dolores laudantium itaque veritatis fugiat numquam soluta assumenda totam ullam saepe explicabo quis veniam corrupti ipsam rerum quo aspernatur voluptates velit accusantium illo neque incidunt, maiores eum, porro repudiandae! Tenetur possimus totam molestias.</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Ngwb;