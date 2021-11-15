import React from 'react';
import { Container, Grid } from '@mui/material';
import { useForm } from "react-hook-form";

const GiveReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Container sx={{ flexGrow: 1, height: "100vh" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <h2 style={{ textAlign: "center" }}>Give Review</h2>
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Name" {...register("name")} /> <br />
                        <input placeholder="Review" {...register("review")} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>

                </Grid>

            </Grid>
        </Container>
    );
};

export default GiveReview;