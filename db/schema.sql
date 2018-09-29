-- CREATE DATABASE pizzadb;
DROP DATABASE pizzadb;
USE pizzadb;

-- Create a pizza table with the required fields 
CREATE TABLE pizzas
(
	id int NOT NULL AUTO_INCREMENT,
	pizza_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);
