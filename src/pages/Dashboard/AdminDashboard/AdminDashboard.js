import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RiAdminFill} from 'react-icons/ri';
import { MdCategory} from 'react-icons/md';
import { FaUsers, FaProductHunt} from 'react-icons/fa';
import "./AdminDashboard.css";


const AdminDashboard = () => {

  return (
    <div>
      <div className="container ">
        <h5 className="text-white  pb-3">DASHBOARD</h5>
        <Row className="g-5">
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

          {/* <Col xs={12} md={6} lg={4} xl={3} onClick={''}>
            <Card className="cardDash " style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex gap-1 align-items-center justify-content-evenly">
                <div className="iconDas">
                  <p>
                    <FaShoppingCart className="orderIcon setBg1" />
                  </p>
                </div>
                <Card.Text className="">
                  <p className="text-white-50 p-0 m-0">Total Order</p>
                  <h2 className="text-start text-white">{''}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}

          {/* <Col xs={12} md={6} lg={4} xl={3}>
            <Card className="cardDash " style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex gap-1 align-items-center justify-content-evenly">
                <div className="iconDas">
                  <p>
                    <SiProcesswire className="orderIcon setBg2" />
                  </p>
                </div>
                <Card.Text className="">
                  <p className="text-white-50 p-0 m-0">Order Pending</p>
                  <h2 className="text-start text-white">

                  </h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
          {/* <Col xs={12} md={6} lg={4} xl={3}>
            <Card className="cardDash " style={{ borderRadius: "20px" }}>
              <Card.Body className="d-flex gap-2 align-items-center justify-content-evenly">
                <div className="iconDas">
                  <p>
                    <GiCheckMark className="orderIcon setBg4" />
                  </p>
                </div>
                <Card.Text className="">
                  <p className="text-white-50 p-0 m-0">Order Delivered</p>
                  <h2 className="text-start text-white">

                  </h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default AdminDashboard;
