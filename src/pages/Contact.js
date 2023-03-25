import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function Contact(props) {

    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(1),
        borderRadius: '4px',
        textAlign: 'center',
      }));


    return (

        <div>
            <div className='about' style={{ textAlign: 'center', color: 'green' }}>
            <h1 style={{ fontSize: '60px', paddingTop: '10px' }}>Our team are here to help</h1>
            </div>
            <div className='avatar'>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>
          <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack>
    <h1>Sarah Segla</h1>
    <p><a style={{ textDecoration: 'none', color: 'green' }} href={"mailto:ablavisarahsegla@gmail.com"}>Ablavisarahsegla@gmail.com</a></p>
          </Item>
        </Grid>
        <Grid xs>
          <Item><Stack direction="row" spacing={2}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    </Stack>
    <h1>Joanna Mills</h1>
    <p><a style={{ textDecoration: 'none', color: 'green' }} href={"mailto:jmills605@gmail.com"}>Jmills605@gmail.com</a></p>
    </Item>
        </Grid>
        <Grid xs>
          <Item><Stack direction="row" spacing={2}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
    <h1>Hayley Callender</h1>
    <p><a style={{ textDecoration: 'none', color: 'green' }} href={"mailto:hayleyalkerpiano@gmail.com"}>Hayleyalkerpiano@gmail.com</a></p>
    </Item>
        </Grid>
      </Grid>
    </Box>
            </div>
        </div>
    )
}

export default Contact;