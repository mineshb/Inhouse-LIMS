package com.minesh.practice.models;

import jakarta.persistence.*;

@Entity
@Table(name="sites")
public class Sites extends BaseEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int siteId;
    @Column(nullable = false)
    private String siteCode;
    @Column(nullable = false)
    private String siteName;
}
