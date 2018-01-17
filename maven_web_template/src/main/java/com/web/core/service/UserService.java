package com.web.core.service;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import com.web.core.domain.UserSecQuestionEntity;
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
     * 根据Id获得User对象
     *
     * @param id 主键Id
     * @return User对象
     */
    public UserEntity getUserById(int id) {
        return userDAO.selectUserById(id);
    }

    /**
     * 判断用户名密码是否正确
     *
     * @param username 用户username
     * @param password password
     * @return true或false
     */
    public boolean valnameateUser(String username, String password) {
        return userDAO.selectUserByUsernameAndPassword(username, password) != null;
    }

    /**
     * 判断用户名是否存在
     *
     * @param username 用户username
     * @return true或false
     */
    public boolean isUsernameExist(String username) {
        return userDAO.selectUserByUsername(username) != null;
    }

    /**
     * 获得用户密保问题
     *
     * @param username 用户username
     * @return 密保问题
     */
    public String getSecQuestion(String username) {
        UserSecQuestionEntity userSecQuestionEntity = userDAO.selectUserSecByUsername(username);
        return userSecQuestionEntity.getSecQuestion();
    }

    /**
     * 验证密保问题回答是否正确
     *
     * @param username 用户username
     * @param answer 密保问题答案
     * @return 是否正确Boolean
     */
    public boolean verifySecAnswer(String username, String answer) {
        UserSecQuestionEntity userSecQuestionEntity = userDAO.selectUserSecByUsername(username);
        return userSecQuestionEntity.getSecAnswer().equals(answer);
    }

    /**
     * 重置用户密码
     *
     * @param username      用户username
     * @param newPassword 新密码
     * @return 重置是否成功
     */
    public boolean resetPassword(String username, String newPassword) {
        return userDAO.updateUserPassword(username, newPassword);
    }
}
