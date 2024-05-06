package com.nhom16.vali.service;

import com.nhom16.vali.entity.User;
import com.nhom16.vali.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;

    public void saveOrUpdate(User user) {
        repo.save(user);
    }

    public Iterable<User> listAllUsers() {
        return repo.findAll();
    }
}
