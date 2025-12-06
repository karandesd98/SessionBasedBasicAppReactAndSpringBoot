package com.sk.PersonData.practice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/public")
public class TestController {

    @Value("${spring.application.name}")
    public String myAppName;

    @Value("${mk.name:going with default}")
    public String myProperty;

    @Value("${sk.env}")
    public String env;

    @GetMapping("/getMsg")
    public ResponseEntity<Map<String, String>> getMsg(){

        Map<String,String> map = new HashMap<>();
        map.put("message","Hello World");
        map.put("myAppName",myAppName);
        map.put("skName",myProperty);
        map.put("env",env);

       return ResponseEntity.ok(map);
    }

}
