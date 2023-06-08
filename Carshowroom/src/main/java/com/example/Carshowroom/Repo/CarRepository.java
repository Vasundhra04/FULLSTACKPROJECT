package com.example.Carshowroom.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Carshowroom.Model.CarModel;

@Repository
public interface CarRepository extends JpaRepository<CarModel,Long>{

}
