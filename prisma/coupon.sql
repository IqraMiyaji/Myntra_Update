CREATE DATABASE mytra_database;

USE mytra_database;

CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL,
  dob DATETIME NOT NULL,
  loginDate DATETIME DEFAULT CURRENT_TIMESTAMP
);
-- Use the mytra_database database
USE mytra_database;

-- Insert 5 rows into the User table
INSERT INTO User (username, email, phone, password, dob)
VALUES
('user1', 'user1@example.com', '1234567890', 'password123', '1990-01-01 00:00:00'),
('user2', 'user2@example.com', '2345678901', 'password456', '1985-02-02 00:00:00'),
('user3', 'user3@example.com', '3456789012', 'password789', '1992-03-03 00:00:00'),
('user4', 'user4@example.com', '4567890123', 'password012', '1995-04-04 00:00:00'),
('user5', 'user5@example.com', '5678901234', 'password345', '1988-05-05 00:00:00');

ALTER TABLE User
ADD COLUMN copan VARCHAR(255);
SET SQL_SAFE_UPDATES = 0;

UPDATE User
SET copan = CONCAT(
    LEFT(username, 3),                         -- First 3 letters of the username
    LPAD(DAY(dob), 2, '0'),                    -- Day of the dob, padded with a zero if necessary
    DATE_FORMAT(loginDate, '%H%i')           -- Time of first login in HHMMSS format
);
SELECT id, username, dob, loginDate, copan FROM User;