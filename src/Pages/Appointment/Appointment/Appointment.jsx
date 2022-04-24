import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointment from './AvailableAppointment/AvailableAppointment'

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointment date={date} setDate={setDate} />
        </>
    );
};

export default Appointment;