import { Tooltip } from "bootstrap";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import "./PortFound.css";
import image2 from "../../../../../src/assets/images/icon/icons8-bitcoin-48.png";
import image from "../../../../../src/assets/images/icon/aave.png";
import { RiSurroundSoundFill } from "react-icons/ri";
import PortFoundChart from "./PortFoundChart";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 6000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const PortFound = () => {
  return (
    <div>
      <h5 className="dashboard-title">Portfound</h5>
      <div className="row">
        <div className="col-12 col-lg-8">
          {/* <div className="chart-header-container d-flex text-white justify-content-between">
            <h6 className="">PORTFOUND TOTAL VALUE</h6>
            <h6
              className="px-2 py-1 rounded-pill"
              style={{ backgroundColor: "rgb(62, 115, 173)" }}
            >
              $0
            </h6>
          </div> */}
          <div className="total-portfound-chart-container">
             {/* <ResponsiveContainer width="100%" height="100%"> 
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
             <Tooltip /> 
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                strokeDasharray="3 4 5 2"
              />
            </LineChart>
             </ResponsiveContainer>  */}
             <PortFoundChart/>
          </div>

          <div className="license-retail-value mt-5">
            <h6 className="text-white">LICENSE RETAIL VALUE</h6>

            <div class="row g-2 text-white mt-2">
              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image2} alt="" style={{ width: "30px" }} />
                      <div className="line"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image} alt="" style={{ width: "30px" }} />
                      <div className="line2"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image2} alt="" style={{ width: "30px" }} />
                      <div className="line"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image} alt="" style={{ width: "30px" }} />
                      <div className="line2"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image2} alt="" style={{ width: "30px" }} />
                      <div className="line"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image} alt="" style={{ width: "30px" }} />
                      <div className="line2"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4">
                <div className=" p-2 rounded goalBg">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={image} alt="" style={{ width: "30px" }} />
                      <div className="line2"> </div>
                    </div>
                    <div className="text-end">
                      <p className="mb-0">$0.00</p>
                      <span className="text-center me-0">
                        <RiSurroundSoundFill />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 py-4 py-md-0">
          <h6 className="text-white mb-2 mt-3 mt-lg-0">WALLET VALUE</h6>

          <div className="each-wallet-value d-flex justify-content-between text-white">
            <div className="d-flex align-items-center gap-1">
              <img src={image} alt="" style={{ width: "30px" }} />
              <span>RGLD</span>
            </div>
            <span>$0</span>
          </div>
          <div className="each-wallet-value d-flex justify-content-between text-white mt-2">
            <div className="d-flex align-items-center gap-1">
              <img src={image2} alt="" style={{ width: "30px" }} />
              <span>DLG</span>
            </div>
            <span>$0</span>
          </div>
          <div className="each-wallet-value d-flex justify-content-between text-white mt-2">
            <div className="d-flex align-items-center gap-1">
              <img src={image} alt="" style={{ width: "30px" }} />
              <span>DCRT</span>
            </div>
            <span>$0</span>
          </div>
          <div className="each-wallet-value d-flex justify-content-between text-white mt-2">
            <div className="d-flex align-items-center gap-1">
              <img src={image2} alt="" style={{ width: "30px" }} />
              <span>NATG</span>
            </div>
            <span>$0</span>
          </div>
          <div className="each-wallet-value d-flex justify-content-between text-white mt-2">
            <div className="d-flex align-items-center gap-1">
              <img src={image} alt="" style={{ width: "30px" }} />
              <span>GROW</span>
            </div>
            <span>$0</span>
          </div>
          <div className="each-wallet-value d-flex justify-content-between text-white mt-2">
            <div className="d-flex align-items-center gap-1">
              <img src={image2} alt="" style={{ width: "30px" }} />
              <span>XPLR</span>
            </div>
            <span>$0</span>
          </div>
          <div className="each-wallet-value d-flex justify-content-between text-white mt-2">
            <div className="d-flex align-items-center gap-1">
              <img src={image} alt="" style={{ width: "30px" }} />
              <span>ALUM</span>
            </div>
            <span>$0</span>
          </div>

          <h6 className="text-white mb-2 mt-4 ">REWORD VALUE</h6>
          <div className="d-flex justify-content-center align-items-center mx-auto mt-5 mb-5 mb-lg-0" style={{ background: '#121936', borderRadius: '100px',  width: '170px', height: '170px', boxShadow: '0px 0px 15px 15px #33518C' }}>
              <div>
                <p className="primary text-center" style={{ fontSize: '16px' }}>$0</p>
                <p className="primary text-center" style={{ fontSize: '12px' }}>(Amount in Piggy Bank)</p>
                <p className="circle-title text-center">Portfound</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortFound;
