import React from 'react';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import project1 from '../../assets/images/Picture1.png'
import project2 from '../../assets/images/Picture2.png'
import project3 from '../../assets/images/project3.png'
import project4 from '../../assets/images/Picture3.png'
import project5 from '../../assets/images/Picture4.png'
import project6 from '../../assets/images/Picture5.png'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './Home.css'

const Projects = () => {

    const projects = [
        {
            image: `${project1}`,
            title: 'MINERAL',
            subTitle: 'Mining Now'
        },
        {
            image: `${project3}`,
            title: 'AGRICULTURAL',
            subTitle: 'Mining Now'
        },
        {
            image: `${project2}`,
            subTitle: 'ONLINE NOW'
        },
        {
            image: `${project4}`,
            title: 'REAL ESTATE',
            subTitle: 'COMING SOON'
        },
        {
            image: `${project5}`,
            title: 'GOLD',
            subTitle: 'COMING SOON'
        },
        {
            image: `${project6}`,
            subTitle: 'COMING SOON'
        },

    ]

    return (
        <div className=' pt-5'>
            <div className='container'>
                <h3 className='projectTitle mb-5'>Our projects</h3>
                <div className='row g-4 pb-3'>
                    {
                        projects.map((project, index) =>
                            <div key={index} className='col-lg-4 col-md-6  text-white' >
                                <Card className='bg-dark py-4' style={{ minHeight: '250px', borderRadius: '40px' }}>
                                    <Card.Img style={{ width: '85px', margin: '0 auto' }} variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Title className='font-mira text-uppercase text-center' style={{ fontSize: '30px', color: '#FFC000' }}>{project.title}</Card.Title>
                                        <Card.Title className='font-mira text-uppercase text-center' style={{ color: '#FFC000' }}>{project.subTitle}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
                {/* <div className='d-flex justify-content-center'>
                <button className='btn btn-light mt-4 px-4 fw-bold'>Learn More <TrendingFlatIcon /></button>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;