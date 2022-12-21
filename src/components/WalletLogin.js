import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Card, Col, Row } from 'react-bootstrap';

export default function WalletLogin({ setOpen, open }) {
    //   const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={setOpen}
                onClose={handleClose}
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
                                            <Button sx={{
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
                                <p className='contents px-2'><a className='contents1' style={{ color: '#989898' }} href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_any" >https://academy.binance.com/en/articles
                                    /connecting-metamask-to-binance-smart-chain</a></p>
                            </div>
                            <p className='text-center mt-4'>
                                <Button onClick={handleClose} className="text-white fs-6 bg-danger">Cancel</Button>
                            </p>
                        </DialogContentText>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}