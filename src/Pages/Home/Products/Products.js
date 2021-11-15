import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch('https://whispering-lake-86725.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    // console.log(products);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5, textAlign: 'center' }} variant="h4" component="div">
                    OUR PRODUCT
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;