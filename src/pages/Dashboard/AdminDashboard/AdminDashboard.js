import { useEffect, useState } from "react";
import "./AdminDashboard.css";
import Chart from "./Chart";
import image from '../../../assets/images/icon/aave.png'
import { AiFillCaretUp } from 'react-icons/ai';


const AdminDashboard = () => {
  const background = 'linear-gradient(to right bottom, #166c76, #006387, #27568f, #5d4083, #7f2060)'

  return (
    <div>
      <div className="">
        <h5 className="text-white  pb-3">DASHBOARD</h5>
        <div className="row py-5">
          <div className="col-lg-3 d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center mx-auto" style={{ width: '150px', height: '150px', borderRadius: '30px', background: `${background}`, }}>
              <div className="d-flex justify-content-center align-items-center" style={{ width: '140px', height: '140px', borderRadius: '30px', background: `${background}`, transform: 'rotate(45deg)' }}>
                <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', border: '2px solid #9E9CB2', width: '120px', height: '120px', transform: 'rotate(-45deg)' }}>
                  <div>
                    <p className="fs-2 fw-bold text-center primary m-0">0%</p>
                    <p className="primary text-center text-uppercase fs-5" style={{ fontSize: '16px' }}>Goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 py-5 py-md-0">
            <Chart />
          </div>
          <div className="col-lg-4">
            <div className="d-flex" style={{ background: '#121936',borderRadius: '10px', boxShadow: '0px 0px 15px 15px #33518C' }}>
              <div className="p-2">
                <p className="fs-3 fw-bold primary text-start text-uppercase">Token values</p>
                <div className="d-flex align-items-center m-0" style={{ borderBottom: '2px solid #161D35' }}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={image} alt="" style={{ width: '30px' }} />
                    <p className="primary my-auto ms-1">Burn Notice:NATG</p>
                  </div>
                  <div>
                    <p className="" style={{ color: '#06A41A', fontSize: '12px' }}> <AiFillCaretUp /> 3.27%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center m-0" style={{ borderBottom: '2px solid #161D35' }}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={image} alt="" style={{ width: '30px' }} />
                    <p className="primary my-auto ms-1">Burn Notice:NATG</p>
                  </div>
                  <div>
                    <p className="" style={{ color: '#06A41A', fontSize: '12px' }}> <AiFillCaretUp /> 3.27%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center m-0" style={{ borderBottom: '2px solid #161D35' }}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={image} alt="" style={{ width: '30px' }} />
                    <p className="primary my-auto ms-1">Burn Notice:NATG</p>
                  </div>
                  <div>
                    <p className="" style={{ color: '#06A41A', fontSize: '12px' }}> <AiFillCaretUp /> 3.27%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center m-0" style={{ borderBottom: '2px solid #161D35' }}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={image} alt="" style={{ width: '30px' }} />
                    <p className="primary my-auto ms-1">Burn Notice:NATG</p>
                  </div>
                  <div>
                    <p className="" style={{ color: '#06A41A', fontSize: '12px' }}> <AiFillCaretUp /> 3.27%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 pb-5">
          <div className="col-lg-4">
            <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px', width: '170px', height: '170px', boxShadow: '0px 0px 15px 15px #33518C' }}>
              <div>
                <p className="primary text-center" style={{ fontSize: '16px' }}>$0</p>
                <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
                <p className="circle-title text-center">Rewards</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex mx-auto" style={{ background: '#121936', borderRadius: '10px', boxShadow: '0px 0px 15px 15px #33518C' }}>
              <div className="p-4">
                <p className="fs-3 fw-bold primary text-start">NEWS</p>
                <div className="d-flex align-items-center mb-3">
                  <img src={image} alt="" style={{ width: '30px' }} />
                  <p className="primary my-auto ms-1">Burn Notice:NATG</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={image} alt="" style={{ width: '30px' }} />
                  <p className="primary my-auto ms-1">Burn Notice:NATG</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center align-items-center mx-auto" style={{ background: '#121936', borderRadius: '100px',  width: '170px', height: '170px', boxShadow: '0px 0px 15px 15px #33518C' }}>
              <div>
                <p className="primary text-center" style={{ fontSize: '16px' }}>$0</p>
                <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
                <p className="circle-title text-center">PORTFOlio</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Row className="g-5">
          <Col xs={12} md={6} lg={4} xl={3} onClick={''}>
            <Card className="cardDash " style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Card.Text className="dashboardTxt">
                  <p>Admins</p>
                  <h2 className="text-start">5</h2>
                </Card.Text>
                <div className="iconDas">
                  <p className="text-white coinsIcon ">
                    <RiAdminFill />
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} xl={3} onClick={''}>
            <Card className="cardDash" style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Card.Text className="dashboardTxt">
                  <p>Users</p>
                  <h2 className="text-start">20</h2>
                </Card.Text>
                <div className="iconDas">
                  <p className="text-white coinsIcon ">
                    <FaUsers />
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} xl={3} onClick={''}>
            <Card className="cardDash " style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Card.Text className="dashboardTxt">
                  <p>Cryptos</p>
                  <h2 className="text-start">15</h2>
                </Card.Text>
                <div className="iconDas">
                  <p className="text-white coinsIcon ">
                    <FaProductHunt />
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} xl={3} onClick={''}>
            <Card className="cardDash " style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Card.Text className="dashboardTxt">
                  <p>Categories</p>
                  <h2 className="text-start">20</h2>
                </Card.Text>
                <div className="iconDas">
                  <p className="text-white coinsIcon ">
                    <MdCategory />
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
