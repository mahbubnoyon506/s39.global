import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { Box } from "@mui/material";

export default function DeleteUser({ openDialog, setOpendialog }) {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClose = () => {
        setOpendialog('');
    };

    const handleDelete = () => {
        axios.delete(`https://testnetback.s39global.com/api/v1/wallet-user/data/${openDialog?._id}`)
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        // position: 'top-end',
                        icon: 'success',
                        title: 'User is deleted',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                setOpendialog('')
            })
    }

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box sx={{background: '#2D313A', color: '#fff', padding: '30px 20px'}}>
                <DialogTitle id="alert-dialog-title">
                    {"User Deletion!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color: '#fff'}} id="alert-dialog-description">
                        Are you sure, You want to delete this user permanently?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{
                        // width: '25%',
                        borderRadius: "0px",
                        background: "#15407F",
                        marginRight: "10px",
                        fontWeight: "500",
                        "&:hover": { background: "#15407F" },
                        color: '#fff',
                        padding: '8px 20px',
                    }} variant='contained' onClick={handleClose}>Cancel</Button>
                    <Button sx={{
                        // width: '25%',
                        borderRadius: "0px",
                        background: "#FF5421",
                        marginRight: "10px",
                        fontWeight: "500",
                        "&:hover": { background: "#FF5421" },
                        color: '#fff',
                        paddingLeft: '5px',
                        padding: '8px 20px'
                    }} variant='contained' onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}