package com.sk.PersonData.practice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class PropertyTest {

    @Value("${spring.application.name}")
    public String appName;

    PropertyTest(){
        System.out.println("PropertyTest zero arg constructor"+appName);
    }

    public void printPropery(){
        System.out.println("appName = "+appName);
    }

}
