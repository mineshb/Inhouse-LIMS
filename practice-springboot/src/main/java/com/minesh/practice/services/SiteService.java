package com.minesh.practice.services;

import com.minesh.practice.models.Sites;
import com.minesh.practice.repositories.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteService {
    @Autowired
    SiteRepository siteRepository;
    public List<Sites> getListOfSites() {
        return siteRepository.findAll();
    }
}
