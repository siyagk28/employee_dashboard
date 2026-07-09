<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Set your timezone just to be safe
date_default_timezone_set('Asia/Kolkata');

// $host = "localhost";
// $user = "root"; 
// $password = ""; 
// $dbname = "employee"; 

$host = "sql302.infinityfree.com";
$user = "if0_42372781";
$pass = "fmUa7eawwny2p";
$dbname = "if0_42372781_employee";

$conn = new mysqli($host, $user, $password, $dbname);

if($conn->connect_error){
    die(json_encode([
        "status" => "error",
        "message" => "Connection failed"
    ]));
}

$sql = "SELECT * FROM leave_requests ORDER BY id DESC";
$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()){
    
    // FORMATTING THE DATE HERE:
    // This forces PHP to send ONLY "YYYY-MM-DD" to React, ignoring any time data in the database.
    $cleanStartDate = date('Y-m-d', strtotime($row["leave_start_date"]));
    $cleanEndDate = date('Y-m-d', strtotime($row["leave_end_date"]));

    $data[] = [
        "id" => $row["id"],
        "startDate" => $cleanStartDate, // Using the cleaned date
        "endDate" => $cleanEndDate,     // Using the cleaned date
        "hours" => $row["hours"],
        "type" => $row["leave_type"],
        "comment" => $row["comment"],
        "status" => $row["status"]
    ];
}

echo json_encode([
    "status" => "success",
    "data" => $data
]);

$conn->close();
?>