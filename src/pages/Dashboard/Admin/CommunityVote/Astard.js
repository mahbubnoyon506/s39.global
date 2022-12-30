import React from 'react';
import { Card } from 'react-bootstrap';

const Astard = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div style={{width: '500px'}}>
                <Card className='py-4' style={{ border: '2px solid #EFCF2C', background: '#171717', minHeight: '270px' }}>
                    <Card.Body className='pb-0 '>
                        <p className='stepText text-center'>You can switch your token and invest into other project or withdraw using DEX (Decentralized Exchange) found in our Super D’Apps platform.</p>
                        {/* <FormGroup  sx={{padding: '0 50px'}}>
                            <FormControlLabel  sx={{color: '#fff'}} control={<Checkbox defaultChecked />} label="Yes" />
                            <FormControlLabel sx={{color: '#fff'}} control={<Checkbox />} label="No" />
                        </FormGroup> */}
                        <p className='stepText text-danger'>You can switch your token and invest into other project </p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Astard;