import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import EditCars from './Admin/EditCars';
import AddCars from './Admin/AddCars';
import ViewCar from './Pages/ViewCar';

function App() {
  return (
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Signin' element={<Signin/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:carId' element={<EditCars/>}/>
        <Route exact path='/Dashboard/add' element={<AddCars/>}/>
        <Route exact path='/View/:carId' element={<ViewCar/>}/>
      </Routes>
  );
}

export default App;