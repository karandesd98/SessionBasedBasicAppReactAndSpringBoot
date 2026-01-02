package com.sk.PersonData.Controllers;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sk.PersonData.Repository.MyUserRepo;
import com.sk.PersonData.entity.MyUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    private final Gson gson = new Gson();
    @Autowired
    private MyUserRepo myUserRepo;


    @GetMapping("/getAllUsers.json")
    public ResponseEntity<String> getAllUsers(){
        JsonArray array = new JsonArray();

      List<MyUser> userList =  myUserRepo.getAllUsers();

      for(MyUser user : userList){
          JsonObject jObj = new JsonObject();
          jObj.addProperty("userId",user.getMyUserId());
          jObj.addProperty("userName",user.getUsername());
          jObj.addProperty("password","***");
          jObj.addProperty("address",user.getAddress());
          jObj.addProperty("age",user.getAge());

          array.add(jObj);
      }

        String json = gson.toJson(array);
        return  ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(json);
    }


}
