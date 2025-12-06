package com.sk.PersonData.CommonUtility;

import com.sk.PersonData.entity.MyUser;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class CommonFunctionlityClass {
    public static MyUser getUser(HttpSession session){
        Object user = session.getAttribute("user");
        if (user != null) {
            MyUser user1 =(MyUser) user;
            return user1;
        } else {
            return null;
        }
    }
}
