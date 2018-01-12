package com.web.core.controller;

import com.web.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author jutal
 * @date 18-1-11
 */
@Controller
@RequestMapping("/")
public class HomeController {

    private UserService userService;

    @Autowired
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/")
    public String index(HttpServletRequest request) throws IOException {
        return "login";
    }

    @RequestMapping("/login")
    public String login(HttpServletRequest request) throws IOException {
        return "login";
    }

    @RequestMapping("/error")
    public String error(HttpServletRequest request) throws IOException {
        return "error";
    }
}
