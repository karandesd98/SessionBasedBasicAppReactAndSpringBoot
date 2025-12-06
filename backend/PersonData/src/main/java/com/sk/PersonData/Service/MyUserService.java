package com.sk.PersonData.Service;

import com.sk.PersonData.entity.MyUser;

import java.util.List;
import java.util.Optional;

public interface MyUserService {
    List<MyUser> getAllUsers();
    MyUser saveUser(MyUser user);
    MyUser getUserById(Integer id);
    void deleteUser(Integer id);
    Optional<MyUser> getUserByUsername(String username);
}
