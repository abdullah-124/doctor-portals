import { Container } from '@mui/material'
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointment from './AvailableAppointment/AvailableAppointment'

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
            <Navigation />
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointment date={date} setDate={setDate} />
        </>
    );
};

export default Appointment;