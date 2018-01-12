package com.web.core.dao.impl;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * @author jutal
 * @date 18-1-11
 */

@Repository
public class UserDAOImpl implements UserDAO {

    private SessionFactory sessionFactory;

    private Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }

    @Autowired
    public UserDAOImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public UserEntity selectUserById(int id) {
        UserEntity userEntity = new UserEntity();
        userEntity.setId(id);

        Session session = getSession();
        return (UserEntity) session.get(UserEntity.class, id);
    }
}
