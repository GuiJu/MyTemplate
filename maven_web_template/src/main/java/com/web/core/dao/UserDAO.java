package com.web.core.dao;

import com.web.core.domain.UserEntity;
import com.web.core.domain.UserSecQuestionEntity;

/**
 * @author jutal
 * @date 18-1-11
 */
public interface UserDAO {

    /**
     * 根据主键id获得User
     *
     * @param id 主键id
     * @return User对象
     */
    UserEntity selectUserById(int id);

    /**
     * 创建新用户
     *
     * @param username username
     * @param password password
     * @return 创建是否成功boolean
     */
    boolean createNewUser(String username, String password);

    /**
     * 根据用户username获得User
     *
     * @param username 用户username
     * @return User对象
     */
    UserEntity selectUserByUsername(String username);

    /**
     * 根据用户username获得UserSecQuestion
     *
     * @param username 用户username
     * @return UserSecQuestion对象
     */
    UserSecQuestionEntity selectUserSecByUsername(String username);

    /**
     * 根据username和password获得用户
     *
     * @param username 用户username
     * @param password 密码
     * @return User对象
     */
    UserEntity selectUserByUsernameAndPassword(String username, String password);

    /**
     * 更新用户密码
     *
     * @param username    用户username
     * @param newPassword 新密码
     * @return 是否更新成功
     */
    boolean updateUserPassword(String username, String newPassword);
}
