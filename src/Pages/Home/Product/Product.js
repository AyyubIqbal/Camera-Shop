import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, description, img, price } = props.product;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 100)}
                    </Typography>
                    <Typography variant="h5" component="div">
                        ${price}
                    </Typography>
                </CardContent>
                <Link to={`/placeorder/${_id}`}>
                    <Button variant="contained" style={{ backgroundColor: "#141E61" }}>Buy Now</Button>
                </Link>

            </Card>
        </Grid>
    );
};

export default Product;