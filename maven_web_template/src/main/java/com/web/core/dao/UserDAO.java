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

}
