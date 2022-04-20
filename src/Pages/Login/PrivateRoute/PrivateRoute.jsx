import { CircularProgress } from '@mui/material'
import React from 'react';
import { Outlet ,Navigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'


const PriavateRoute = () => {
    const {user, loading} = useAuth()
    // console.log(user)
    if(loading){return <CircularProgress />}

    return user.email ? <Outlet/> : <Navigate to="/login" />
        
    
};

export default PriavateRoute;