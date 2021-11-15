import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { Typography, Button, Container, Grid, Box } from '@mui/material';
import './PlaceOrder.css'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const PlaceOrder = () => {
    const { serviceId } = useParams();
    const { user } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});
    const onSubmit = data => {
        console.log(data);
        fetch('https://whispering-lake-86725.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order precess successfully');
                    reset()
                }
            })
    };

    useEffect(() => {
        fetch(`https://whispering-lake-86725.herokuapp.com/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ textAlign: 'left' }} xs={12} md={6}>
                    <Box style={{ margin: "20px 0" }}>
                        <Typography variant="h4">
                            {service.name}
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: '#787A91' }}>
                            {service.description}
                        </Typography>
                        <Typography variant="h2">
                            ${service.price}
                        </Typography>

                        <img style={{ width: '450px' }} src={service.img} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input type="address" {...register("address")} placeholder="address" />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input type="submit" />
                    </form>

                </Grid>

            </Grid>
        </Container>
    );
};

export default PlaceOrder;