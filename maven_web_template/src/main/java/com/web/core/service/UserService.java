package com.web.core.service;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author jutal
 * @date 18-1-11
 */
@Service
public class UserService {

    private UserDAO userDAO;

    @Autowired
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public UserEntity getUserById(int id) {
        return userDAO.selectUserById(id);
    }
}
