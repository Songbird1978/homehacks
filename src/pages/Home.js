import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGIcopyremoved.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo';
import MyProject from "../imageData.json";
import '../Home.css';
import washingmachine from '../images/washing-machine-sm.svg';
import water from '../images/watertwo.svg';
import plug from '../images/plug-sm.svg';
import light from '../images/lights-sm.svg';
import computer from '../images/computer-sm.svg';
import radiator from '../images/radiator.svg';
import bike from '../images/bike-sm.svg';
import fridge from '../images/fridge-sm.svg';
import kettle from '../images/kettle-sm.svg';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

function Home(props) {
    const [open, setOpen] = React.useState(new Array(MyProject.length).fill(false));
    const handleClose = () => setOpen(new Array(MyProject.length).fill(false));

    return (
        <div>
            
            <Container className="bgi" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <Logo className="logo"></Logo>
               
                <Grid container className="gridContainer" spacing={6} >
                    
                    <Grid item xs={6} md={3} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={washingmachine} alt=""className="washingMachine"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={water} alt=""className="water"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={plug} alt=""className="plug"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                           
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={light} alt=""className="light"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                        <img src={radiator} alt=""className="radiator"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={computer} alt=""className="computer"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                            <div className="saveMoney">Save Money! Turn it off at the plug!</div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                       
                        <div className="dontDrive">ROUTES OUT OF TOWN {<br></br>} Save Money! Don't Drive!</div>
                        <button className="button" onClick="" >
                            <img src={bike} alt=""className="bike"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={washingmachine} alt=""className="washingMachine"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={fridge} alt=""className="fridge"></img>
                        </button>
                    </Grid>
                      <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={kettle} alt=""className="kettle"></img>
                        </button>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default Home;

function Home(props) {
    const [open, setOpen] = React.useState(new Array(MyProject.length).fill(false));
    const handleClose = () => setOpen(new Array(MyProject.length).fill(false));
  
    return (
      <div>
        <Container style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: "cover",}}>
          <Logo className="logo"></Logo>
          <div className="inside">
            {MyProject.map((Project) => {
                return (
                  <div className="box" key={Project.id}>
                    <Grid container className="gridItem">
                      <Grid item xs={12} md={5} lg={2}>
                        <Button onClick={()=>
                        {const newOpen=[...open];
                          newOpen[Project.id - 1] = true;
                          setOpen(newOpen)}}>
                          <img alt="Appliance Icon" src={Project.imageUrl} />
                        </Button>
                        <Modal
                          open={open[Project.id-1]}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              {Project.title}
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              {Project.description}
                            </Typography>
                          </Box>
                        </Modal>
                      </Grid>
                      <Grid item xs={12} md={6} lg={3}></Grid>
                      <Grid item xs={12} md={6} lg={3}>
                        3
                      </Grid>
                      <Grid item xs={12} md={6} lg={3}>
                        4
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
  
            <Grid container className="gridItem">
              <Grid item xs={6} md={1} lg={1}>
                1
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
  
  export default Home;
