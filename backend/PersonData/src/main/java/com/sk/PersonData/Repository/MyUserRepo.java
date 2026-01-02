package com.sk.PersonData.Repository;

import com.sk.PersonData.entity.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MyUserRepo extends JpaRepository<MyUser, Integer> {
    Optional<MyUser> findByUsername(String username);

    @Query(value = "select * from my_user where  is_deleted is false",nativeQuery = true)
    public List<MyUser> getAllUsers();
}
