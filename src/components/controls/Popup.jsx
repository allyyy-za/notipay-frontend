import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import styles from './styles/Popup.module.css'

export default function Popup(props) {

    const { children, openPopup, setOpenPopup} = props;
    const closePopup = () => setOpenPopup(false);

    return(
        <Dialog open={openPopup} PaperProps={{ sx: {
              width: 443,
              height: 599,
            }}}>
            <DialogContent>
                <IconButton className={styles.closeIcon} onClick={closePopup}><CloseIcon  /></IconButton>
                {children}
            </DialogContent>
        </Dialog>
    );
}