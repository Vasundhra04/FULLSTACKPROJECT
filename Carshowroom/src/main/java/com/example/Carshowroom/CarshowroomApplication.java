package com.example.Carshowroom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info=@Info(
				title="Car Data",
				version="1.1.2",
				description="Car details",
				contact=@Contact(
						name="Vasundhra",
						email="vasundhravinayagam@gmail.com"
						)
				)	
		)
public class CarshowroomApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarshowroomApplication.class, args);
	}

}
