-- Add leave_history table to your existing database
USE employee;

-- Create leave_history table
CREATE TABLE IF NOT EXISTS leave_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    hours DECIMAL(5,2) NOT NULL,
    leave_type VARCHAR(50) NOT NULL,
    comment TEXT,
    status VARCHAR(20) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES users(email) ON DELETE CASCADE
);

-- Insert sample leave history data
INSERT INTO leave_history (user_email, start_date, end_date, hours, leave_type, comment, status) VALUES 
('alex@acme.com', '2026-07-03', '2026-07-03', 8.00, 'Paid Time Off', 'sick leave', 'APPROVED'),
('alex@acme.com', '2026-06-25', '2026-06-27', 24.00, 'Paid Time Off', 'Planned PTO for personal time off', 'PROCESSED'),
('alex@acme.com', '2026-06-10', '2026-06-10', 8.00, 'Paid Time Off', 'Planned PTO for a family function.', 'PROCESSED')
ON DUPLICATE KEY UPDATE id=id;
