import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://whispering-lake-86725.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })

    };
    return (
        <div style={{ height: "100vh" }}>
            <div className="add-product">
                <h2 style={{ textAlign: "center" }}>Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="img-url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;