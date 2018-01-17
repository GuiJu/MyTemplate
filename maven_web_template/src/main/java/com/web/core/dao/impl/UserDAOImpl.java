package com.web.core.dao.impl;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import com.web.core.domain.UserSecQuestionEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
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
    public boolean createNewUser(String username, String password) {

        if (selectUserByUsername(username) != null) {
            return false;
        } else {
            UserEntity userEntity = new UserEntity();
            userEntity.setUsername(username);
            userEntity.setPassword(password);
            userEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
            userEntity.setUpdateTime(new Timestamp(System.currentTimeMillis()));

            Session session = getSession();
            session.save(userEntity);
            return true;
        }

    }

    @Override
    public UserEntity selectUserByUsername(String username) {
        Session session = getSession();
        String hql = "FROM UserEntity as user where user.username = '" + username + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        if (list.size() == 0) {
            return null;
        } else {
            return (UserEntity) list.get(0);
        }
    }

    @Override
    public UserSecQuestionEntity selectUserSecByUsername(String username) {
        Session session = getSession();
        String hql = "FROM UserSecQuestionEntity as userSec where userSec.username = '" + username + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        if (list.size() == 0) {
            return null;
        } else {
            return (UserSecQuestionEntity) list.get(0);
        }

    }

    @Override
    public UserEntity selectUserByUsernameAndPassword(String username, String password) {
        Session session = getSession();
        String hql = "FROM UserEntity as user where user.username = '" + username + "' and user.password = '" + password + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        if (list.size() == 0) {
            return null;
        } else {
            return (UserEntity) list.get(0);
        }
    }

    @Override
    public boolean updateUserPassword(String username, String newPassword) {
        Session session = getSession();
        UserEntity userEntity = selectUserByUsername(username);
        userEntity.setPassword(newPassword);
        userEntity.setUpdateTime((Timestamp) new Date());

        session.merge(userEntity);
        return true;
    }
}
