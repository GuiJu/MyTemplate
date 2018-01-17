package com.web.core.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.web.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * @author jutal
 * @date 18-1-11
 */
@Controller
@CrossOrigin
public class UserController {

    private final String SUCCESS = "success";
    private final String ERROR = "error";

    private static ObjectMapper objectMapper = new ObjectMapper();
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 用户登录接口
     *
     * @param request http请求
     * @return response
     */
    @RequestMapping(value = "/user/userLogin", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String userLogin(@RequestBody Map<String, String> request) throws JsonProcessingException {
        String username = request.get("username");
        String password = request.get("password");
        Map<String, String> result = new HashMap<String, String>(16);

        if (userService.valnameateUser(username, password)) {
            result.put("result", SUCCESS);
            return objectMapper.writeValueAsString(result);
        } else {
            result.put("result", ERROR);
            return objectMapper.writeValueAsString(result);
        }
    }

    /**
     * 找回密码用,检测是否用户名存在
     *
     * @param request http请求
     * @return response
     */
    @RequestMapping(value = "/user/checkUsername", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String checkUsername(@RequestBody Map<String, String> request) throws JsonProcessingException {
        String username = request.get("username");
        Map<String, String> result = new HashMap<String, String>(16);

        if (userService.isUsernameExist(username)) {
            result.put("result", SUCCESS);
            return objectMapper.writeValueAsString(result);
        } else {
            result.put("result", ERROR);
            result.put("msg", "Username does not exist");
            return objectMapper.writeValueAsString(result);
        }
    }

    /**
     * 获得用户密保问题
     *
     * @param request http请求
     * @return response
     */
    @RequestMapping(value = "/user/getSecQuestion", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String getSecQuestion(HttpServletRequest request) throws JsonProcessingException {
        String username = request.getParameter("username");
        Map<String, String> result = new HashMap<String, String>(16);
        String secQuestion = userService.getSecQuestion(username);

        result.put("result", SUCCESS);
        result.put("secQuestion", secQuestion);

        return objectMapper.writeValueAsString(result);
    }

    /**
     * 验证密保问题答案
     *
     * @param request http请求
     * @return response
     */
    @RequestMapping(value = "/user/verifySecAnswer", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String verifySecAnswer(@RequestBody Map<String, String> request) throws JsonProcessingException {
        String username = request.get("username");
        String answer = request.get("answer");
        Map<String, String> result = new HashMap<String, String>(16);

        if (userService.verifySecAnswer(username, answer)) {
            result.put("result", SUCCESS);
        } else {
            result.put("result", ERROR);
        }

        return objectMapper.writeValueAsString(result);
    }

    /**
     * 重置密码
     *
     * @param request http请求
     * @return response
     */
    @RequestMapping(value = "/user/resetPassword", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String resetPassword(@RequestBody Map<String, String> request) throws JsonProcessingException {
        String username = request.get("username");
        String password = request.get("password");
        Map<String, String> result = new HashMap<String, String>(16);

        if (userService.resetPassword(username, password)) {
            result.put("result", SUCCESS);
        } else {
            result.put("result", ERROR);
        }

        return objectMapper.writeValueAsString(result);
    }

}
