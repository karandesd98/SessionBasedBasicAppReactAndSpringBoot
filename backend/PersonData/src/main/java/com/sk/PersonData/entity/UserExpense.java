package com.sk.PersonData.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="USER_EXPENSE")
public class UserExpense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userExpenseId;

    @Column(name="AMOUNT")
    private Double amount;

    @Column(name="DESCRIPTION")
    private String description;

    @Column(name="DATE")
    private LocalDate date;


    public Integer getUserExpenseId() {
        return userExpenseId;
    }

    public Double getAmount() {
        return amount;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setUserExpenseId(Integer userExpenseId) {
        this.userExpenseId = userExpenseId;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
