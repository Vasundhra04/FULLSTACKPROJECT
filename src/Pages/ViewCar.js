import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindData } from '../services/api';
import { BackBtn } from '../Components/Buttons';

export default function ViewCar() {
    const { carId } = useParams();
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

    useEffect(() => {
        fetchCar();
    }, []);

    const fetchCar = async () => {
        try {
            const response = await FindData(carId);
            setCar(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='car-view'>
            <div className='product-container-main cardx'>
                <div className='product-img-main card-container'>
                    {/* <img src={car.carimg} alt='car-image' className='car-cover' /> */}
                </div>
                <div className='car-content-main'>
                    <h1 className='car-id'>{car.carid}</h1>
                    <h3 className='car-price'>Price: {car.price}</h3>
                    <h3 className='car-carmodel'>Carmodel: {car.carmodel}</h3>
                    <h3 className='car-bootspacecapacity'>{car.bootspacecapacity}</h3>
                    <h3 className='car-enginetype'>{car.enginetype}</h3>
                    <h3 className='car-fueltype'>{car.fueltype}</h3>
                    <h3 className='car-maxpower'>{car.maxpower}</h3>
                    <h3 className='car-mileage'>{car.mileage}</h3>
                    <h3 className='car-seating'>{car.seating}</h3>
                    
                </div>
            </div>
            <BackBtn />
        </div>
    );
}