import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Card, Col, Row } from 'react-bootstrap';
import Slide from '@mui/material/Slide';
import { S39GlobalContext } from '../contexts/S39GlobalContext';
import { forwardRef, useContext } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="top" ref={ref} {...props} />;
});


export default function WalletLogin() {
    const { connectToMetamask, walletModal, closeWalletModal, } = useContext(S39GlobalContext);

    return (
        <div>
            <Dialog
                open={walletModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeWalletModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dialogWallet pt-4" style={{ backgroundColor: '#060C13' }}>
                    <DialogContent className='alertWalletDiv' >
                        <DialogContentText id="alert-dialog-slide-description">
                            <Row xs={1} md={1} className="g-2">
                                <Col>
                                    <Card className='walletDiv walletModal_icon text-center' onClick={''} style={{ backgroundColor: 'transparent', cursor: 'pointer', color: '#989898' }}>
                                        <Card.Img variant="top" style={{ width: "50px" }} src="https://i.ibb.co/vVf533V/1.png" className="maskImg mx-auto" />
                                        <Card.Body className='border-0'>
                                            <Card.Title className='walletName'>Metamask</Card.Title>
                                            <Button
                                                onClick={() => connectToMetamask()}
                                                sx={{
                                                    background: '#F6851B', '&:hover': {
                                                        backgroundColor: "#F6851B",
                                                    }
                                                }} variant="contained" disableElevation>
                                                Click here to login
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="contentDiv text-center" style={{ color: '#989898' }}>
                                <p className='contents'>You can use Binance Chain to connect.</p>
                                <p className='contents'>Add Binance Chain in your Metamask as follows.</p>
                                <p className='contents px-2'><a className='contents1' style={{ color: '#fff' }} href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_any" >https://academy.binance.com/en/articles
                                    /connecting-metamask-to-binance-smart-chain</a></p>
                            </div>
                            <p className='text-center mt-4'>
                                <Button onClick={closeWalletModal} className="text-white fs-6 bg-danger">Cancel</Button>
                            </p>
                        </DialogContentText>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}