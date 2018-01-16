package com.web.core.dao.impl;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import com.web.core.domain.UserSecQuestionEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author author
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

    @Override
    public UserEntity selectUserByUserId(String userId) {
        Session session = getSession();
        String hql = "FROM UserEntity as user where user.userId = '" + userId + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        return (UserEntity) list.get(0);
    }

    @Override
    public UserSecQuestionEntity selectUserSecByUserId(String userId) {
        Session session = getSession();
        String hql = "FROM UserSecQuestionEntity as userSec where userSec.userId = '" + userId + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        return (UserSecQuestionEntity) list.get(0);
    }

    @Override
    public UserEntity selectUserByUserIdAndPassword(String userId, String password) {
        Session session = getSession();
        String hql = "FROM UserEntity as user where user.userId = '" + userId + "' and user.password = '" + password + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        if (list.size() == 0) {
            return null;
        } else {
            return (UserEntity) list.get(0);
        }
    }

    @Override
    public boolean updateUserPassword(String userId, String newPassword) {
        Session session = getSession();
        UserEntity userEntity = selectUserByUserId(userId);
        userEntity.setPassword(newPassword);

        session.merge(userEntity);
        return true;
    }
}
