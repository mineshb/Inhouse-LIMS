package com.minesh.practice.controllers;

import com.minesh.practice.models.Sites;
import com.minesh.practice.services.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SiteController {
    @Autowired
    SiteService siteService;
    @GetMapping("/printMsg")
    public String printMsg() {
        List<Sites> sites = siteService.getListOfSites();
        return "Hello World >> " + sites.size();
    }
}
