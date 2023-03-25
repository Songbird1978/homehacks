import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';


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
            <div className='avator'>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
            </div>
        </div>
    )
}

export default Contact;