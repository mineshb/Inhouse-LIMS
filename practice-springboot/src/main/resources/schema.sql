-- This is for MySQL
--create database practicedb;
-- This is for MySQL
--use practicedb;

CREATE TABLE IF NOT EXISTS `sites` (
  `site_id` int AUTO_INCREMENT  PRIMARY KEY,
  `site_code` varchar(10) NOT NULL UNIQUE,
  `site_name` varchar(100) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `teams` (
  `team_id` int AUTO_INCREMENT  ,
  `team_code` varchar(10) NOT NULL UNIQUE,
  `team_name` varchar(50) NOT NULL,
  `site_id` int NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`team_id`),
  FOREIGN KEY (`site_id`) REFERENCES sites(`site_id`)
);

CREATE TABLE IF NOT EXISTS `test_methods` (
  `test_method_id` int AUTO_INCREMENT  PRIMARY KEY,
  `test_method_name` varchar(50) NOT NULL UNIQUE,
  `test_method_description` varchar(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `tests` (
  `test_id` int AUTO_INCREMENT  ,
  `test_code` varchar(10) NOT NULL,
  `test_name` varchar(100) NOT NULL,
  `test_method_id` int NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY(`test_id`),
  FOREIGN KEY (`test_method_id`) REFERENCES test_methods(`test_method_id`)
);

CREATE TABLE IF NOT EXISTS `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
   PRIMARY KEY (`role_id`)
);

CREATE TABLE IF NOT EXISTS `appusers` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_number` varchar(20) NOT NULL,
  `pwd` varchar(200) NOT NULL,
  `role_id` int NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
   PRIMARY KEY (`user_id`),
   FOREIGN KEY (`role_id`) REFERENCES roles(`role_id`)
);

CREATE TABLE IF NOT EXISTS `user_teams` (
  `test_team_id` int AUTO_INCREMENT  PRIMARY KEY,
  `user_id` int NOT NULL,
  `team_id` int NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL
);