import React, { useState, useEffect } from 'react';
import { LoginBtn } from '../Components/Buttons';
import { useNavigate } from 'react-router-dom';
import { GetData } from '../services/api';

export default function Home() {
  const [car, setCar] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await GetData();
      setCar(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const viewCar = (carId) => {
    navigate(`/viewcar/${carId}`);
  };

  return (
    <div className='data-container home-bg'>
      {car.map((car) => (
        <div key={car.carid} className="card-container" onClick={() => viewCar(car.carid)}>
          <div className="card">
            <div className="front-content">
              {/* <img src={car.carimg} className='card-img' alt='tree' /> */}
            </div>
            <div className="content">
              <p className="heading">{car.carmodel}</p>
              <p>
                Price: {car.price} INR
                <br />
                Enginetype: {car.enginetype}
                <br/>
                Fueltype: {car.fueltype}
                <br/>
                Maxpower: {car.maxpower}
                <br/>
                Mileage: {car.mileage}
                <br/>
                Bootspacecapacity: {car.bootspacecapacity}
                <br/>
            Seating: {car.seating}


              </p>
              
            </div>
          </div>
        </div>
      ))}
      <LoginBtn />
    </div>
  );
}