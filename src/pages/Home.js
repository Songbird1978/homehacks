import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGIcopyremoved.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo';
import MyProject from "../imageData.json";
import '../Home.css';


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

            <Container className="bgi" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", }}>
                <Logo className="logo"></Logo>

                <Grid container className="gridContainer" spacing={6} >

                    {MyProject.map((Project) => {
                        return (

                            <Grid item xs={6} md={3} lg={3} className="gridItem" key={Project.id}>
                                <button className="button" onClick={() => {
                                    const newOpen = [...open];
                                    newOpen[Project.id - 1] = true;
                                    setOpen(newOpen)
                                }}>
                                    <img src={Project.imageUrl} alt={Project.imageName} className={Project.className} />
                                </button>
                                <Modal style={{overflow:'scroll'}}
                                    open={open[Project.id - 1]}
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
                                        <Typography
                                            id="modal-modal-description"
                                            sx={{ mt: 2 }}
                                        >
                                            {Project.info}
                                        </Typography>
                                        <a href={Project.links}><Button>FIND OUT MORE </Button></a>
                                        <h6>Copyright : "{Project.copyright}"</h6>
                                        <img src={Project.imageUrl} alt={Project.imageName} className={Project.className} style={{alignItems: "center" }} />
                                    </Box>
                                </Modal>
                            </Grid>


                        );
                    })}

                </Grid>

            </Container>
        </div>
    );
}

export default Home;
