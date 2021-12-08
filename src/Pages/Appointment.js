import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AppointmentSection from '../Components/Appointment/AppointmentSection';
import AppointmentTable from '../Components/Appointment/AppoitmentTable';
import { useEffect } from 'react';

const Appointment = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <>
            <Header/>
            <AppointmentSection/>
            <AppointmentTable/>
            <Footer/>
        </>

    );
};

export default Appointment;