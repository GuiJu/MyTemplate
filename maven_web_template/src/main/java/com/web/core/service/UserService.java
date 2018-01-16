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
     * 根据id获得User对象
     * @param id 主键id
     * @return User对象
     */
    public UserEntity getUserById(int id) {
        return userDAO.selectUserById(id);
    }

    /**
     * 判断用户名密码是否正确
     * @param username 用户userId
     * @param password password
     * @return true或false
     */
    public boolean validateUser(String username, String password) {
        return userDAO.selectUserByUserIdAndPassword(username, password) != null;
    }

    /**
     * 判断用户名是否存在
     * @param username 用户userId
     * @return true或false
     */
    public boolean isUsernameExist(String username) {
        return userDAO.selectUserByUserId(username) != null;
    }

    /**
     * 获得用户密保问题
     * @param userId 用户userId
     * @return 密保问题
     */
    public String getSecQuestion(String userId) {
        UserSecQuestionEntity userSecQuestionEntity = userDAO.selectUserSecByUserId(userId);
        return userSecQuestionEntity.getSecQuestion();
    }

    /**
     * 验证密保问题回答是否正确
     * @param userId 用户userId
     * @param answer 密保问题答案
     * @return 是否正确Boolean
     */
    public boolean verifySecAnswer(String userId, String answer) {
        UserSecQuestionEntity userSecQuestionEntity = userDAO.selectUserSecByUserId(userId);
        return userSecQuestionEntity.getSecAnswer().equals(answer);
    }

    /**
     * 重置用户密码
     * @param userId 用户userId
     * @param newPassword 新密码
     * @return 重置是否成功
     */
    public boolean resetPassword(String userId, String newPassword) {
        return userDAO.updateUserPassword(userId, newPassword);
    }
}
