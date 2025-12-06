package com.sk.PersonData.Repository;

import com.sk.PersonData.entity.UserPhotos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPhotosRepo extends JpaRepository<UserPhotos,Integer> {
}
