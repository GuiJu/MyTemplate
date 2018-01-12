package com.web.core.service;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 用户相关Service逻辑
 */
@Service
public class UserService {

    private UserDAO userDAO;

    @Autowired
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    /**
     * 根据id获得User对象
     * @param id 主键id
     * @return User对象
     */
    public UserEntity getUserById(int id) {
        return userDAO.selectUserById(id);
    }

    /**
     * 判断用户名密码是否正确
     * @param username username
     * @param password password
     * @return true或false
     */
    public boolean isUserExist(String username, String password) {
        return userDAO.selectUserByUsernameAndPassword(username, password) != null;
    }
}
