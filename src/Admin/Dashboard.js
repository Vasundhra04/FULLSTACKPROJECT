import React, { useState, useEffect } from 'react';
import { GetData, DeleteData } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AddBtn, HomeBtn, LogoutBtn } from '../Components/Buttons';
import AuthCheck from './Auth/AuthCheck';


export default function Dashboard() {
    const [car, setCar] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetchCar();
    }, []);

    const fetchCar = async () => {
        try {
            const response = await GetData();
            setCar(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (carId) => {
        try {
            await DeleteData(carId);
            alert('Car Deleted !');
            fetchCar();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (carId) => {
        navigate(`/Dashboard/edit/${carId}`);
    };

    return (
        <div>
            <AuthCheck/>
            <div className='dashboard-content dash-bg'>
                <table className='table-container card-square-0'>
                    <thead>
                        <tr>
                            <th>
                                <h1>CarId</h1>
                            </th>
                            <th>
                                <h1>Carmodel</h1>
                            </th>
                            <th>
                                <h1>Enginetype</h1>
                            </th>
                            <th>
                                <h1>Fueltype</h1>
                            </th>
                            <th>
                                <h1>Bootspacecapacity</h1>
                            </th>
                            <th>
                                <h1>Maxpower</h1>
                            </th>
                            <th>
                                <h1>Mileage</h1>
                            </th>
                            <th>
                                <h1>Price</h1>
                            </th>
                            <th>
                                <h1>Seating</h1>
                            </th>
                            <th>
                                <h1>Actions</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {car.map((car) => (
                            <tr key={car.carid}>
                                <td className='table-data'>{car.carid}</td>
                                <td className='table-data'>{car.carmodel}</td>
                                <td className='table-data'>{car.bootspacecapacity}</td>
                                <td className='table-data'>{car.enginetype}</td>
                                <td className='table-data'>{car.fueltype}</td>
                                <td className='table-data'>{car.maxpower}</td>
                                <td className='table-data'>{car.mileage}</td>
                                <td className='table-data'>{car.price}</td>
                                <td className='table-data'>{car.seating}</td>
                                <td className='table-actions form-btn-container'>
                                    <button onClick={() => handleEdit(car.carid)} className='form-btn-x form-edit-btn'>
                                    <span className="material-symbols-outlined ico-x">edit</span>
                                    </button>
                                    <button onClick={() => handleDelete(car.carid)} className='form-btn-x form-delete-btn'>
                                    <span className="material-symbols-outlined ico-x">delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddBtn />
            <LogoutBtn />
            <HomeBtn />
        </div>
    );
}