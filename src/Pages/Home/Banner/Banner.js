import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import camera from '../../../images/camera.jpg';
import { Link } from 'react-router-dom';


const bannerBg = {
    background: '#EEEEEE',

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h4">
                            Affordable crop-sensor bodies <br />
                            with DSLR swagger.
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: '#787A91' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Link to="/explore" >
                            <Button variant="contained" style={{ backgroundColor: '#0F044C' }}>Explore More</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '450px' }} src={camera} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;