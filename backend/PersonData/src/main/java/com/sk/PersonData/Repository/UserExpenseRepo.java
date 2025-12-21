package com.sk.PersonData.Repository;

import com.sk.PersonData.entity.UserExpense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserExpenseRepo extends JpaRepository<UserExpense,Integer> {
    
    @Query(value = "SELECT * FROM USER_EXPENSE WHERE user_id = :userId" , nativeQuery= true)
    public List<UserExpense> getAllByUserId(@Param("userId") Integer userId);

}
