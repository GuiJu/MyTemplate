package com.web.core.domain;

import javax.persistence.*;

/**
 * @author jutal
 * @date 18-1-17
 * @file
 */
@Entity
@Table(name = "user_sec_question", schema = "webconsole", catalog = "")
public class UserSecQuestionEntity {
    private int id;
    private String secQuestion;
    private String secAnswer;
    private String username;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "sec_question")
    public String getSecQuestion() {
        return secQuestion;
    }

    public void setSecQuestion(String secQuestion) {
        this.secQuestion = secQuestion;
    }

    @Basic
    @Column(name = "sec_answer")
    public String getSecAnswer() {
        return secAnswer;
    }

    public void setSecAnswer(String secAnswer) {
        this.secAnswer = secAnswer;
    }

    @Basic
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserSecQuestionEntity that = (UserSecQuestionEntity) o;

        if (id != that.id) return false;
        if (secQuestion != null ? !secQuestion.equals(that.secQuestion) : that.secQuestion != null) return false;
        if (secAnswer != null ? !secAnswer.equals(that.secAnswer) : that.secAnswer != null) return false;
        if (username != null ? !username.equals(that.username) : that.username != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (secQuestion != null ? secQuestion.hashCode() : 0);
        result = 31 * result + (secAnswer != null ? secAnswer.hashCode() : 0);
        result = 31 * result + (username != null ? username.hashCode() : 0);
        return result;
    }
}
