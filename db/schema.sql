DROP DATABASE IF EXISTS projectsDB;
CREATE database projectsDB;

USE projectsDB;

CREATE TABLE picker (
  position INT NOT NULL,
  project VARCHAR(50) NOT NULL,
  whatType VARCHAR(15) NOT NULL,
  duration INT NOT NULL,
  whatGroup INT NOT NULL,
  whatLanguage VARCHAR(15) NULL,
  whatTechnology VARCHAR(15) NULL,
  interests VARCHAR(15) NULL,
  difficulty INT NOT NULL,
  
  PRIMARY KEY (position)
);

SELECT * FROM picker;

CREATE TABLE user (
  position INT NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  userName VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,

  PRIMARY KEY (position)

);