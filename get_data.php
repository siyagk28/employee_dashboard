//<?php
// 1. Allow React to talk to PHP (CORS Headers)
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

// 2. Database Connection
// $host = "localhost";
// $user = "root"; 
// $password = ""; 
// $dbname = "employee"; // CHANGE THIS to your actual database name

// $conn = new mysqli($host, $user, $password, $dbname);

// if ($conn->connect_error) {
//     echo json_encode(["status" => "error", "message" => "Database connection failed"]);
//     exit();
// }

// 3. Test Response
// In a real app, you would run a SELECT query here and fetch rows from your tables.
// $response = [
//     "status" => "success",
//     "message" => "Connected to PHP successfully!",
//     "active_users" => 24, // Mock data
//     "pending_leaves" => 3 // Mock data
// ];

// echo json_encode($response);
// $conn->close();
// ?>

<!-- <?php
// 1. Allow React to talk to PHP (CORS Headers)
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json"); -->

// 2. Database Connection
// $host = "localhost";
// $user = "root"; 
// $password = ""; 
// $dbname = "employee"; 

// $conn = new mysqli($host, $user, $password, $dbname);

// if ($conn->connect_error) {
//     echo json_encode(["status" => "error", "message" => "Database connection failed"]);
//     exit();
// }

// 3. Count REAL Active Users
// $users_query = "SELECT COUNT(*) as count FROM users WHERE status = 'active'";
// $users_result = $conn->query($users_query);
// $active_users = 0;
// if ($users_result && $row = $users_result->fetch_assoc()) {
//     $active_users = $row['count'];
// }

// 4. Count REAL Pending Leaves
// $leaves_query = "SELECT COUNT(*) as count FROM leave_requests WHERE status = 'pending'";
// $leaves_result = $conn->query($leaves_query);
// $pending_leaves = 0;
// if ($leaves_result && $row = $leaves_result->fetch_assoc()) {
//     $pending_leaves = $row['count'];
// }

// 5. Send Real Data to React
// $response = [
//     "status" => "success",
//     "message" => "Live database connection successful!",
//     "active_users" => $active_users,
//     "pending_leaves" => $pending_leaves
// ];

// echo json_encode($response);
// $conn->close();
// ?>

<?php
// 1. Allow React to talk to PHP (CORS Headers)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. Database Connection
$host = "localhost";
$user = "root"; 
$password = ""; 
$dbname = "employee"; 

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit();
}

// 3. Count ALL Users (Removed the 'WHERE status' check)
$users_query = "SELECT COUNT(*) as count FROM users";
$users_result = $conn->query($users_query);
$active_users = 0;
if ($users_result && $row = $users_result->fetch_assoc()) {
    $active_users = $row['count'];
}

// 4. Count ALL Leave Requests (Removed the 'WHERE status' check)
$leaves_query = "SELECT COUNT(*) as count FROM leave_requests";
$leaves_result = $conn->query($leaves_query);
$pending_leaves = 0;
if ($leaves_result && $row = $leaves_result->fetch_assoc()) {
    $pending_leaves = $row['count'];
}

// 5. Send Real Data to React
$response = [
    "status" => "success",
    "message" => "Live database connection successful!",
    "active_users" => $active_users,
    "pending_leaves" => $pending_leaves
];

echo json_encode($response);
$conn->close();
?>