package com.sk.PersonData;
import com.sk.PersonData.practice.Employee;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.stream.Collectors;

 @SpringBootApplication
 @PropertySource("classpath:custom.properties")
public class PersonDataApplication {

	public static void main(String[] args) {
           SpringApplication.run(PersonDataApplication.class, args);
    }

}
