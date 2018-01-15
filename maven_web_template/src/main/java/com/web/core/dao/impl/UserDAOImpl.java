package com.web.core.dao.impl;

import com.web.core.dao.UserDAO;
import com.web.core.domain.UserEntity;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

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
    public UserEntity selectUserByUsernameAndPassword(String username, String password) {
        Session session = getSession();
        String hql = "FROM UserEntity as user where user.userId = '" + username + "' and user.password = '" + password + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        if (list.size() == 0) {
            return null;
        } else {
            return (UserEntity) list.get(0);
        }
    }

    @Override
    public UserEntity selectUserByUsername(String username) {
        Session session = getSession();
        String hql = "FROM UserEntity as user where user.userId = '" + username + "'";
        Query query = session.createQuery(hql);
        List list = query.list();

        if (list.size() == 0) {
            return null;
        } else {
            return (UserEntity) list.get(0);
        }
    }


}
