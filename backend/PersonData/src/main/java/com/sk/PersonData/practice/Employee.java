package com.sk.PersonData.practice;

import java.time.LocalDate;
import java.time.Period;
import java.util.Date;
import java.util.Objects;

public class Employee {

    Integer empId;
    String empName;
    Double empSalary;
    LocalDate empJoiningDate;
    LocalDate birthDate;
   public Period empAge;


    public Employee(Integer empId, LocalDate birthDate, LocalDate empJoiningDate, Double empSalary, String empName) {
        this.empId = empId;
        this.birthDate = birthDate;
        this.empJoiningDate = empJoiningDate;
        this.empSalary = empSalary;
        this.empName = empName;
    }

    public Employee() {

    }

    public void setEmpId(Integer empId) {
        this.empId = empId;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public void setEmpSalary(Double empSalary) {
        this.empSalary = empSalary;
    }

    public void setEmpJoiningDate(LocalDate empJoiningDate) {
        this.empJoiningDate = empJoiningDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public Integer getEmpId() {
        return empId;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public String getEmpName() {
        return empName;
    }

    public Double getEmpSalary() {
        return empSalary;
    }

    public LocalDate getEmpJoiningDate() {
        return empJoiningDate;
    }


    @Override
    public String toString() {
        return "Employee{" +
                "empId=" + empId +
                ", empName='" + empName + '\'' +
                ", empSalary=" + empSalary +
                ", empJoiningDate=" + empJoiningDate +
                ", birthDate=" + birthDate +


        '}';
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(empId, employee.empId) && Objects.equals(empName, employee.empName) && Objects.equals(empSalary, employee.empSalary) && Objects.equals(empJoiningDate, employee.empJoiningDate) && Objects.equals(birthDate, employee.birthDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(empId, empName, empSalary, empJoiningDate, birthDate);
    }


}
