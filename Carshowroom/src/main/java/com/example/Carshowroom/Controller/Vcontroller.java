package com.example.Carshowroom.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Carshowroom.Model.CarModel;
import com.example.Carshowroom.Model.UserModel;
import com.example.Carshowroom.Service.Vservice;



@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class Vcontroller {

	@Autowired
	private Vservice serv;
	
	@PostMapping("/Signin")
	private String Login(@RequestBody Map<String, String> xLogin) {
	    String emailid = xLogin.get("emailid");
	    String password = xLogin.get("password");
	    String result = serv.Login(emailid,password);
	    return result;
	}

	//@Tag(name = "Signup", description = "Signup Endpoint")
    @PostMapping("/Signup")
    public String Signup(@RequestBody UserModel user) {
        return serv.Signup(user);
    }
	
	
	//@Tag(name = "List Products", description = "List All Products")
	@GetMapping("/getcar")
	private List<CarModel> Games(){
		return serv.getData();
	}
	//http://localhost:8080/api/viewcar/3
	//@Tag(name = "Sort Product by ID", description = "View indudual Product Data")
	@GetMapping("/viewcar/{id}")
	private Optional<CarModel> viewCar(@PathVariable long id) {
		return serv.findbyID(id);
	}
	
	
	//@Tag(name = "Add Product", description = "Add New Product")
	@PostMapping(value="/add")
	private CarModel addProduct(@RequestBody CarModel data) {
		return serv.addData(data);
	}
	
	//@Tag(name = "Edit Product", description = "Edit Existing Product")
	@PutMapping("/edit/{id}")
	private CarModel editProduct(@PathVariable Long id, @RequestBody CarModel data) {
		return serv.editData(data, id);
	}
	
	//@Tag(name = "Delete Data", description = "Delete The Existing Product")
	@DeleteMapping("/delete/{id}")
	private String deleteProduct(@PathVariable long id) {
		return serv.deleteData(id);
	}
	
	
	

	
}
