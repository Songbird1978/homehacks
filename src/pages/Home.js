import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGI.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo';
import RoomIcon from '@mui/icons-material/Room';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Home() {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <div>
            <Container style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <Logo className="logo"></Logo>

            <Grid container item  className="gridContainer" > 
                    
                            <Grid item xs={12} md={6} lg={3} className="imageData" >
                                
                                {/* <Modal /> */}
                            </Grid>
                     
                </Grid>
            
                <Grid container className="gridItem" >
                    <Grid item xs={12} md={5} lg={2}>
                        
                        <Button onClick={handleOpen}><RoomIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}></Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}>4</Grid>
                </Grid>
                <Grid container className="gridItem" >
                    <Grid item xs={6} md={1} lg={1}>1</Grid>

                </Grid>
                <Grid container className="gridItem" >
                    <Grid item xs={12} md={5} lg={2}></Grid>
                    <Grid item xs={12} md={6} lg={3}>2</Grid>
                    <Grid item xs={4} md={8} lg={3}></Grid>
                    
                </Grid>
            </Container>
        </div >
    )
}

export default Home;