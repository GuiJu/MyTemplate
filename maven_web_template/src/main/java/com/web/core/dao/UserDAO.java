package com.web.core.dao;

import com.web.core.domain.UserEntity;

/**
 * @author jutal
 * @date 18-1-11
 */
public interface UserDAO {

    /**
     * 根据主键id获得User
     * @param id 主键id
     * @return User对象
     */
    UserEntity selectUserById(int id);

    /**
     * 根据username和password获得用户
     * @param username 用户名
     * @param password 密码
     * @return User对象
     */
    UserEntity selectUserByUsernameAndPassword(String username, String password);

    /**
     * 根据username获得用户
     * @param username 用户名
     * @return User对象
     */
    UserEntity selectUserByUsername(String username);
}
