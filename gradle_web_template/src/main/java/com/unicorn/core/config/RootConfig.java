package com.unicorn.core.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * Created by cuidong on 17-8-15.
 */
@Configuration
@ComponentScan(basePackages = {"com.unicorn.core.controller"},
excludeFilters = {@ComponentScan.Filter(type = FilterType.ANNOTATION,
value = EnableWebMvc.class)})
public class RootConfig {

}
