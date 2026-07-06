-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2026 at 10:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `message`) VALUES
(1, 'System update at 02:00 AM'),
(2, 'Alex approved your pull request'),
(3, 'Office closed this Friday');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `day` varchar(10) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `day`, `percentage`) VALUES
(1, 'M', 65),
(2, 'T', 90),
(3, 'W', 45),
(4, 'T', 100),
(5, 'F', 75);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `department` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `vacation_balance` int(11) NOT NULL,
  `sick_balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_history`
--

CREATE TABLE `leave_history` (
  `id` int(11) NOT NULL,
  `leave_start_date` date NOT NULL,
  `leave_end_date` date NOT NULL,
  `hours` decimal(5,2) NOT NULL,
  `leave_type` varchar(50) NOT NULL,
  `comment` text DEFAULT NULL,
  `status` enum('Pending','Approved','Rejected') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_requests`
--

CREATE TABLE `leave_requests` (
  `id` int(11) NOT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `leave_start_date` date DEFAULT NULL,
  `leave_end_date` date DEFAULT NULL,
  `hours` int(11) DEFAULT NULL,
  `leave_type` varchar(50) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `status` varchar(20) DEFAULT 'PENDING'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leave_requests`
--

INSERT INTO `leave_requests` (`id`, `user_email`, `leave_start_date`, `leave_end_date`, `hours`, `leave_type`, `comment`, `status`) VALUES
(1, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(2, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(3, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(4, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(5, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(6, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(7, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(8, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(9, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(10, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(11, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(12, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(13, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(14, 'test123@gmail.com', '2026-07-06', '2026-07-08', 5, 'PERSONAL', 'test', 'PENDING'),
(15, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(16, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(17, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(18, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(19, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(20, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(21, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(22, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(23, 'test123@gmail.com', '2026-07-06', '2026-07-07', 4, 'PERSONAL', 'test', 'PENDING'),
(24, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(25, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(26, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(27, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(28, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(29, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(30, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(31, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(32, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(33, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(34, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(35, 'test123@gmail.com', '2026-07-06', '2026-07-07', 2, 'SICK', 'test', 'PENDING'),
(36, '', '0000-00-00', '0000-00-00', 0, '', '', 'PENDING'),
(37, '', '0000-00-00', '0000-00-00', 0, '', '', 'PENDING'),
(38, 'test123@gmail.com', '2026-07-07', '2026-07-09', 5, 'PERSONAL', 'test', 'PENDING'),
(39, 'test123@gmail.com', '2026-07-07', '2026-07-09', 2, 'PERSONAL', 'test', 'PENDING'),
(40, '', '0000-00-00', '0000-00-00', 0, '', '', 'PENDING'),
(41, 'bingo@gmail.com', '2026-07-08', '2026-07-02', 4, 'VACATION', 'Vacation', 'PENDING'),
(42, 'alex@acme.com', '2026-07-02', '2026-07-09', 7, 'VACATION', 'Vacation', 'PENDING'),
(43, 'bingo@gmail.com', '2026-07-08', '2026-07-11', 7, 'VACATION', 'Vacation', 'PENDING'),
(44, 'alex123@gmail.com', '2026-07-07', '2026-07-15', 7, 'VACATION', 'Vacation', 'PENDING'),
(45, 'alex01@gmail.com', '2026-07-08', '2026-07-16', 9, 'VACATION', 'Vacation', 'PENDING'),
(46, 'alex02@gmail.com', '2026-07-08', '2026-07-23', 8, 'VACATION', 'Vacation', 'PENDING'),
(47, 'alex04@gmail.com', '2026-07-09', '2026-07-13', 7, 'VACATION', 'Vacation', 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'alex@acme.com', 'password123', '2026-07-05 11:00:15'),
(2, 'test123@gmail.com', 'testing@0613', '2026-07-05 11:02:21'),
(3, 'testing124@gmail.com', 'bangtan@123', '2026-07-05 11:04:41'),
(4, 'qwerty@test.com', '1234567', '2026-07-05 14:02:20'),
(5, 'test2@test.com', '12345678', '2026-07-06 14:06:24'),
(6, 'bingo@gmail.com', 'pass123', '2026-07-06 19:39:55'),
(7, 'alex123@gmail.com', 'password@001', '2026-07-06 20:15:49'),
(8, 'alex01@gmail.com', 'pass123', '2026-07-06 20:26:58'),
(9, 'alex02@gmail.com', 'pass@01', '2026-07-06 20:30:59'),
(10, 'alex04@gmail.com', 'pass@03', '2026-07-06 20:34:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `leave_history`
--
ALTER TABLE `leave_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `leave_history`
--
ALTER TABLE `leave_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leave_requests`
--
ALTER TABLE `leave_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
