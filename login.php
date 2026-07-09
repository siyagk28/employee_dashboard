<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database configuration
// $host = 'localhost';
// $dbname = 'employee';
// $username = 'root';
// $password = '';

$host = "sql302.infinityfree.com";
$user = "if0_42372781";
$pass = "fmUa7eawwny2p";
$dbname = "if0_42372781_employee";

try {
    $pdo = new PDO("fetch('http://your-infinityfree-domain.com/register.php')");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request data']);
    exit;
}

$email = $data['email'];
$password = $data['password'];

try {
    // Check if user exists and password matches
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
    $stmt->execute([$email, $password]);
    
    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode(['status' => 'success', 'message' => 'Login successful', 'user' => ['email' => $user['email']]]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
}
?>
