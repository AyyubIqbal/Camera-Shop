import React from 'react';
import { Button, TextField, Alert } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    setSuccess(true);
                    console.log(data);
                }
            })
        e.preventDefault();
    }
    return (
        <div style={{ height: "100vh" }}>
            <h2>make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"

                />
                <Button variant="contained" color="primary" type="submit">Make Admin</Button>
                {success && <Alert severity="success">made admin successfully!</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;