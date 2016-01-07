CREATE DATABASE emutack;

USE emutack;


CREATE TABLE Users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL, /* later add: password  varchar(40)   NOT NULL, */
  PRIMARY KEY (ID)
);

CREATE TABLE Jobs (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  name varchar(200) NOT NULL,
  description varchar(200)  NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  latitude DECIMAL(8,6),
  longitude DECIMAL(9,6),
  PRIMARY KEY (ID)
);

CREATE TABLE Bids (
  user_id        int    NOT NULL,
  job_id         int    NOT NULL, /* later add: password  varchar(40)   NOT NULL, */
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (job_id) REFERENCES Jobs(id)
);

-- CREATE TABLE ZipcodeToCoordinates (
--   zipcode        int    NOT NULL,
--   latitude DECIMAL(8,6),
--   longitude DECIMAL(9,6)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/