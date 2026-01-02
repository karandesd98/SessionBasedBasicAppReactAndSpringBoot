package com.sk.PersonData.practice;

// contructor should private
public class SingalToneJavaClass {

    private static  SingalToneJavaClass singalToneJavaClass;

    private SingalToneJavaClass(){

    }

    public static SingalToneJavaClass getSinglToneObj(){

        if(singalToneJavaClass != null){
            singalToneJavaClass = new SingalToneJavaClass();
        }

        return  singalToneJavaClass;
    }



}
