import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';
import { BackBtn } from '../Components/Buttons';
import AuthCheck from './Auth/AuthCheck';


export default function AddCars() {
    const navigate = useNavigate();
    const [car, setCar] = useState({
      carid:'',
      bootspacecapacity:'',
      carmodel:'',
      enginetype:'',
      fueltype:'',
      maxpower:'',
      mileage:'',
      price:'',
      seating:'',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCar((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AddData(car);
            alert('Car added!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content add-bg'>
            <AuthCheck/>
            <div className='cardx1 form-data-align'>
            <form onSubmit={handleSubmit} className='form-data-card'>
                    <input type='text' placeholder='CarId' name='carid' value={car.carid} onChange={handleInputChange} className='car-input' required />
                    
                    <input type='text' placeholder='Carmodel' name='carmodel' value={car.carmodel} onChange={handleInputChange} className='car-input' required />
              
                    <input type='text' placeholder='Bootspacecapacity' name='bootspacecapacity' value={car.bootspacecapacity} onChange={handleInputChange} className='car-input' required />
                    
                    <input type='text' placeholder='Enginetype' name='enginetype' value={car.enginetype} onChange={handleInputChange} className='car-input' required />
                    
                    <input type='text' placeholder='Fueltype' name='fueltype' value={car.fueltype} onChange={handleInputChange} className='car-input' required />
                    
                    <input type='text' placeholder='Maxpower' name='maxpower' value={car.maxpower} onChange={handleInputChange} className='car-input' required />
               
                    <input type='text' placeholder='Mileage' name='mileage' value={car.mileage} onChange={handleInputChange} className='car-input' required />
                   
                    <input type='text' placeholder='Price' name='price' value={car.price} onChange={handleInputChange} className='car-input' required />
                    
                    <input type='text' placeholder='Seating' name='seating' value={car.seating} onChange={handleInputChange} className='car-input' required />
                    <button type='submit' className='button2'>Add Car</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}