import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = React.useState([]);

    useEffect(() => {
        fetch('https://whispering-lake-86725.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} variant="h4" component="div">
                    REVIEWS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(reviewText => <Review key={reviewText._id} reviewText={reviewText} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;