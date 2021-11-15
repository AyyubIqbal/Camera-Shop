import { Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ marginTop: "20px" }}>
            <Container>
                <Typography sx={{ textAlign: 'center', py: 4, backgroundColor: "#141E61", color: "white" }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;