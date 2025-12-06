package com.sk.PersonData.ServiceImpl;

import com.sk.PersonData.Repository.MyUserRepo;
import com.sk.PersonData.Service.MyUserService;
import com.sk.PersonData.entity.MyUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MyUserServiceImpl implements MyUserService {

    @Autowired
    private MyUserRepo myUserRepository;

    @Override
    public List<MyUser> getAllUsers() {
        return myUserRepository.findAll();
    }

    @Override
    public MyUser saveUser(MyUser user) {
        return myUserRepository.save(user);
    }

    @Override
    public MyUser getUserById(Integer id) {
        return myUserRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteUser(Integer id) {
        myUserRepository.deleteById(id);
    }

    @Override
    public Optional<MyUser> getUserByUsername(String username) {
        return myUserRepository.findByUsername(username);
    }

}
