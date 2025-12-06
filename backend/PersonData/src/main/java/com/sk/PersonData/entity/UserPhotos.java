package com.sk.PersonData.entity;

import jakarta.persistence.*;

@Entity
@Table(name="USER_PHOTOS")
public class UserPhotos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userPhotoId;

    private Integer userId;
    private String fileName;
    private String fileType;
    private String filePath;


    public Integer getUserPhotoId() {
        return userPhotoId;
    }

    public void setUserPhotoId(Integer userPhotoId) {
        this.userPhotoId = userPhotoId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
}
