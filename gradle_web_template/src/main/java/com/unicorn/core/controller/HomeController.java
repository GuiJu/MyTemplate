package com.unicorn.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author cuidong
 * @date 17-8-20
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/")
    public String home(){
        return "index";
    }

    @RequestMapping(value = "/dist/")
    public String dist(){
        return "index";
    }

}
