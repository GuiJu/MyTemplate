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
     * 根据用户userId获得User
     *
     * @param userId 用户userId
     * @return User对象
     */
    UserEntity selectUserByUserId(String userId);

    /**
     * 根据用户userId获得UserSecQuestion
     *
     * @param userId 用户userId
     * @return UserSecQuestion对象
     */
    UserSecQuestionEntity selectUserSecByUserId(String userId);

    /**
     * 根据userId和password获得用户
     *
     * @param userId 用户userId
     * @param password 密码
     * @return User对象
     */
    UserEntity selectUserByUserIdAndPassword(String userId, String password);

    /**
     * 更新用户密码
     *
     * @param userId      用户userId
     * @param newPassword 新密码
     * @return 是否更新成功
     */
    boolean updateUserPassword(String userId, String newPassword);
}
