package com.sk.PersonData.Controllers;

import com.sk.PersonData.Service.MyUserService;
import com.sk.PersonData.entity.MyUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private MyUserService myUserService;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/getMsgPublic.json")
    public ResponseEntity<String> getWelcomeMsg(){


        String message = "Software Developer";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("/createNewUser.json")
    public ResponseEntity<MyUser> createUser(@RequestBody MyUser user) {

        // Encode the password before saving
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        MyUser savedUser = myUserService.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
}
