import React from 'react';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListGroup from 'react-bootstrap/ListGroup';
import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/project2.png'
import project3 from '../../assets/images/project3.png'
import project4 from '../../assets/images/project4.png'
import project5 from '../../assets/images/project5.png'
import project6 from '../../assets/images/project6.png'
import project7 from '../../assets/images/project7.png'
import project8 from '../../assets/images/project8.png'
import project9 from '../../assets/images/project9.png'
import project10 from '../../assets/images/project10.png'
import './Home.css'

const Projects = () => {

    const projects = [
        {
            image: `${project1}`,
            title: 'DEBT',
            subTitle: 'Mining Now'
        },
        {
            image: `${project2}`,
            title: 'BGLD',
            subTitle: 'Mining Now'
        },
        {
            image: `${project7}`,
            title: 'GROW',
            subTitle: 'Mining Now'
        },
        {
            image: `${project4}`,
            title: 'NATG',
            subTitle: 'Mining Now'
        },
        {
            image: `${project5}`,
            title: 'DLG',
            subTitle: 'Mining Now'
        },
        {
            image: `${project6}`,
            title: 'XPLR',
            subTitle: 'Mining Now'
        },
        {
            image: `${project7}`,
            title: 'ALBUM',
            subTitle: 'Mining Now'
        },
        {
            image: `${project8}`,
            title: 'BLOX',
            subTitle: 'Mining Now'
        },
        {
            image: `${project9}`,
            title: 'REV',
            subTitle: 'Mining Now'
        },
        {
            image: `${project10}`,
            title: 'DLS',
            subTitle: 'Mining Now'
        },
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,

                },
            },
            {
                breakpoint: 777,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };



    return (
        <div className=' ' style={{ background: '#000000' }}>
            <div className='container'>
                <h3 className='projectTitle'>Our projects</h3>
                <div className='row g-2'>
                    <Slider {...settings}>
                        {
                            projects.map((project, index) =>
                                <div key={index} className='col-lg-3 col-md-6 text-white'>
                                    <Card className='bg-dark py-4' style={{ border: '2px solid #454545' }}>
                                        <Card.Img style={{ width: '85px', margin: '0 auto' }} variant="top" src={project.image} />
                                        <Card.Body>
                                            <Card.Title className='text-uppercase text-center' style={{ fontSize: '30px' }}>{project.title}</Card.Title>
                                            <Card.Title className='text-uppercase text-center'>{project.subTitle}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </Slider>
                </div>


            </div>
        </div>
    );
};

export default Projects;