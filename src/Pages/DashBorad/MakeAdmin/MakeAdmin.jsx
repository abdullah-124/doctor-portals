import  * as React from 'react';
import {Alert, Button, TextField} from '@mui/material'
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = React.useState('')
    const [success, setSuceess] = React.useState(false)
    const {token} = useAuth();
    const handleOnBlur = e =>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handleAdminSubmit = (e) =>{
        const user = {email}
        fetch('https://pure-reef-05928.herokuapp.com/users/admin', {
            method: 'PUT', 
            headers: {
                "authorization" : `Bearer ${token}`,
                "content-type" : 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuceess(true)
                setEmail('')
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            {success && <Alert security='success'>We make {email} as a admin!!</Alert>}
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{width: '50%'}} onBlur={handleOnBlur} label="Email" type="email" variant="standard" />
                <Button type='submit'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;