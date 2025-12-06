package com.sk.PersonData.Controllers;

import com.sk.PersonData.CommonUtility.CommonFunctionlityClass;
import com.sk.PersonData.DaoClasses.ExpenseDao;
import com.sk.PersonData.Repository.UserExpenseRepo;
import com.sk.PersonData.Repository.UserPhotosRepo;
import com.sk.PersonData.Service.MyUserService;
import com.sk.PersonData.entity.MyUser;
import com.sk.PersonData.entity.UserExpense;
import com.sk.PersonData.entity.UserPhotos;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private  MyUserService myUserService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserExpenseRepo userExpenseRepo;
    @Autowired
    private UserPhotosRepo userPhotosRepo;



    @GetMapping("/getMsg.json")
    public ResponseEntity<String> getWelcomeMsg(){
        String message = "Hello from Spring Boot!";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }


    @GetMapping("/getLoginStatus.json")
    public ResponseEntity<?> checkLoginStatus(HttpSession session) {
        Object user = session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not logged in");
        }
    }


    @PostMapping("/addTransaction.json")
    public ResponseEntity<String> addTransaction(HttpSession session,@Valid @RequestBody ExpenseDao expenseDao){

        MyUser user = CommonFunctionlityClass.getUser(session);
        System.out.println(user);
        UserExpense userExpense = new UserExpense();
        userExpense.setAmount(expenseDao.getAmount());
        userExpense.setDate(expenseDao.getDate());
        userExpense.setDescription(expenseDao.getDescription());
        UserExpense   userExpense1 =   userExpenseRepo.save(userExpense);
        String resMsg="";
        if(userExpense1.getUserExpenseId()!=null){
            resMsg = "successfully added transaction" ;
        }else{
            resMsg = "fail to add transaction" ;
        }

        return ResponseEntity.status(HttpStatus.OK).body(resMsg);
    }

    @GetMapping("/getAllTransaction.json")
    public ResponseEntity<List<UserExpense>> getAllTransactions(){
        List<UserExpense> listOfAllTransaction =   userExpenseRepo.findAll();
        return ResponseEntity.ok(listOfAllTransaction);
    }

    private final String uploadDir = "uploads/";
    @PostMapping("uploadImage.json")
    public ResponseEntity<String> uploadUserImage(@RequestParam("file") MultipartFile file) throws IOException {

        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.write(filePath, file.getBytes());

        UserPhotos imageEntity = new UserPhotos();
        System.out.println(file.getOriginalFilename());
        imageEntity.setUserId(3);
        imageEntity.setFileName(file.getOriginalFilename());
        imageEntity.setFileType(file.getContentType());
        imageEntity.setFilePath("uploads/" + fileName);
        imageEntity= userPhotosRepo.save(imageEntity);

        String resMsg="";
        if(imageEntity.getUserPhotoId()!=null){
            resMsg = "file uploaded successfully" ;
        }else{
            resMsg = "fail to upload file" ;
        }
        return new ResponseEntity<>(resMsg,HttpStatus.OK);
    }


    @GetMapping("/getAllImages.json")
    public ResponseEntity<List<UserPhotos>> getAllImages() {
        List<UserPhotos> images = userPhotosRepo.findAll();
        return ResponseEntity.ok(images);
    }



}
