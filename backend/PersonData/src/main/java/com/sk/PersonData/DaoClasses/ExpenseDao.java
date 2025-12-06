package com.sk.PersonData.DaoClasses;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public class ExpenseDao {

    @NotNull(message = "Amount is required")
    @Positive(message = "mount must be greater than zero")
    private Double amount;

    @NotBlank(message = "Description is required")
    @Size(max = 20, message = "Description cannot exceed 20 characters")
    private String description;

    @NotNull(message = "Date is required")
    private LocalDate date;

    @Override
    public String toString() {
        return "ExpenseDao{" +
                "amount=" + amount +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
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

    public Double getAmount() {
        return amount;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDate() {
        return date;
    }
}
