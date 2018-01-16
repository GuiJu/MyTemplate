package com.web.core.domain;

import javax.persistence.*;

/**
 * @author jutal
 * @date 18-1-16
 * @file
 */
@Entity
@Table(name = "user_sec_question", schema = "webconsole", catalog = "")
public class UserSecQuestionEntity {
    private int id;
    private String userId;
    private String secQuestion;
    private String secAnswer;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "userId")
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "sec_question")
    public String getSecQuestion() {
        return secQuestion;
    }

    public void setSecQuestion(String secQuestion) {
        this.secQuestion = secQuestion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserSecQuestionEntity that = (UserSecQuestionEntity) o;

        if (id != that.id) return false;
        if (userId != null ? !userId.equals(that.userId) : that.userId != null) return false;
        if (secQuestion != null ? !secQuestion.equals(that.secQuestion) : that.secQuestion != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (userId != null ? userId.hashCode() : 0);
        result = 31 * result + (secQuestion != null ? secQuestion.hashCode() : 0);
        return result;
    }

    @Basic
    @Column(name = "sec_answer")
    public String getSecAnswer() {
        return secAnswer;
    }

    public void setSecAnswer(String secAnswer) {
        this.secAnswer = secAnswer;
    }
}
