package com.example.Carshowroom.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="data")
public class CarModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long carid;
	public Long getCarid() {
		return carid;
	}
	public void setCarid(Long carid) {
		this.carid = carid;
	}
	public String getCarmodel() {
		return carmodel;
	}
	public void setCarmodel(String carmodel) {
		this.carmodel = carmodel;
	}
	public String getBootspacecapacity() {
		return bootspacecapacity;
	}
	public void setBootspacecapacity(String bootspacecapacity) {
		this.bootspacecapacity = bootspacecapacity;
	}
	public String getEnginetype() {
		return enginetype;
	}
	public void setEnginetype(String enginetype) {
		this.enginetype = enginetype;
	}
	public String getFueltype() {
		return fueltype;
	}
	public void setFueltype(String fueltype) {
		this.fueltype = fueltype;
	}
	public String getMaxpower() {
		return maxpower;
	}
	public void setMaxpower(String maxpower) {
		this.maxpower = maxpower;
	}
	public String getMileage() {
		return mileage;
	}
	public void setMileage(String mileage) {
		this.mileage = mileage;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getSeating() {
		return seating;
	}
	public void setSeating(String seating) {
		this.seating = seating;
	}
	private String carmodel;
	private String bootspacecapacity;
	private String enginetype;
	private String fueltype;
	private String maxpower;
	private String mileage;
	private String price;
	private String seating;
	
}


