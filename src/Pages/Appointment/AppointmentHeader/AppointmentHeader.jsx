import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar'

const AppointmentHeader = ({date, setDate}) => {
    return (
        <>
            <Container sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2'>Appointment</Typography>
                        <Calendar date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={chair} alt="chair" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AppointmentHeader;