package com.example.Carshowroom.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.Carshowroom.Model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Long>{
	UserModel findByemailid(String emailid);

}
