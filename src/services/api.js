import axios from 'axios';

// Springboot API URL
const URL = 'http://localhost:8080/api';

const GetData = () => axios.get(`${URL}/getcar`);
const AddData = (car) => axios.post(`${URL}/add`,car);
const FindData = (carid) => axios.get(`${URL}/viewcar/${carid}`);
const EditData = (carid, formData) => axios.put(`${URL}/edit/${carid}`, formData);
const DeleteData = (carid) => axios.delete(`${URL}/delete/${carid}`);

const xSignin = (formData) => axios.post(`${URL}/Signin`, formData);
const xSignup = (formData) => axios.post(`${URL}/Signup`, formData);

export {
  GetData,
  AddData,
  FindData,
  EditData,
  DeleteData,
  xSignin,
  xSignup
};