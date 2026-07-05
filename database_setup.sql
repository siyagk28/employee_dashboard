-- Add users table to your existing database
USE employee;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default test user (password: password123)
INSERT INTO users (email, password) VALUES 
('alex@acme.com', 'password123')
ON DUPLICATE KEY UPDATE email=email;
