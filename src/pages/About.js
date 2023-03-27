import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';


function About() {

  const Item = styled('div')(({ theme }) => ({

    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));



  return (

    <div>
      <div className='about' style={{ textAlign: 'center', color: 'green' }}>
        <h1 style={{ fontSize: '60px', paddingTop: '10px' }}>About Us</h1>
        <p> We are Home Hacks!, we help people find out different ways to save money within their houses.</p>
        <p>Find out how much it would cost to use different appliances depending on the time
          and how much energy they're consuming.</p>
        <p style={{ paddingTop: '100px' }}>(our logo maybe)</p>

        <h2 style={{ paddingTop: '100px' }}>That's Not All!</h2>
        <p>Home Hacks cares about the enviroment. We help find cycling routes to help protect biodiversity.
          Less emissions, noise and air pollution.
        </p>
        <p style={{ padding: '100px' }}>(bike pic or icon?)</p>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid xs>
              <Item>
                <p style={{ paddingBottom: '50px' }}>(icon here)</p>
                <p>Together we learn interesting facts!</p>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                <p style={{ paddingBottom: '50px' }}>(icon here)</p>
                <p>Together we can reduce pollution!</p>
              </Item>
            </Grid>
            <Grid xs>
              <Item>
                <p style={{ paddingBottom: '50px' }}>(icon here)</p>
                <p>Together we have a greener lifestyle!</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default About;