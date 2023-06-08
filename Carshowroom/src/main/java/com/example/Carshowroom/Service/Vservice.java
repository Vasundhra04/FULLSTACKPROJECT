package com.example.Carshowroom.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Carshowroom.Model.CarModel;
import com.example.Carshowroom.Model.UserModel;
import com.example.Carshowroom.Repo.CarRepository;
import com.example.Carshowroom.Repo.UserRepository;

@Service
public class Vservice {

	
	@Autowired
	private CarRepository apprepo;
	@Autowired
	private UserRepository authrepo;

	//Login Logic
	public String Login(String emailid, String password) {
		UserModel xuser = authrepo.findByemailid(emailid);
		if (xuser == null) {
			return "Invalid";
		} else {
			if (xuser.getPassword().equals(password)) {
				return "success";
			} else {
				return "Invalidpassword";
			}
		}
	}

	//Signup Logic
	public String Signup(UserModel xuser) {
	    String emailid = xuser.getEmailid();
	    UserModel authuser = authrepo.findByemailid(emailid);
	    if (authuser == null) {
	        authrepo.save(xuser);
	        return "useradded";
	    } else {
	        return "existingusername";
	    }
	}

	// Get 
	public List<CarModel> getData() {
		return apprepo.findAll();
	}
	
	// Post
	public CarModel addData(CarModel data) {
		return apprepo.save(data);
	}
	
	// Edit (modify if data exists and save, else don't save)
	public CarModel editData(CarModel data, Long id) {
		CarModel edx = apprepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setCarid(data.getCarid());
			edx.setCarmodel(data.getCarmodel());
			edx.setEnginetype(data.getEnginetype());
			edx.setFueltype(data.getFueltype());
			edx.setMaxpower(data.getMaxpower());
			edx.setMileage(data.getMileage());
			edx.setBootspacecapacity(data.getBootspacecapacity());
			edx.setPrice(data.getPrice());
			edx.setSeating(data.getSeating());
			return apprepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	
	//Delete
	public String deleteData(Long id) {
		apprepo.deleteById(id);
		return "Deleted Successfully";
	}
	
	//Find by ID
	public Optional<CarModel> findbyID(Long id) {
		return apprepo.findById(id);
	}
	
}