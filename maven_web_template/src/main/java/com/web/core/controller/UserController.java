package com.web.core.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.web.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

        if (userService.isUserExist(username, password)) {
            result.put("result", SUCCESS);
            return objectMapper.writeValueAsString(result);
        } else {
            result.put("result", ERROR);
            return objectMapper.writeValueAsString(result);
        }
    }
}
