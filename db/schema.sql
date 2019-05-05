CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger(
  id INT(10) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(225) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);