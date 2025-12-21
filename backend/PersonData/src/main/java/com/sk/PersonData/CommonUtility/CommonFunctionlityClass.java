package com.sk.PersonData.CommonUtility;

import com.sk.PersonData.Service.MyUserService;
import com.sk.PersonData.entity.MyUser;
import com.sk.PersonData.security.UserDetailsServiceImpl;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CommonFunctionlityClass {

    @Autowired
    private MyUserService myUserService;

    public  void setSessionValue(HttpSession session) {

        UserDetails principal = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName =  principal.getUsername();
        MyUser user = null;
        if (userName != null) {
            user = myUserService.getUserByUsername(userName)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        } else {

        }
        session.setAttribute("user", user);
        session.setAttribute("customData", "someValue");

    }
}
