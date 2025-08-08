<?php
// Enable CORS (optional for testing, secure it for production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// Parse JSON body
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Validate required fields
$requiredFields = ['name', 'email', 'phone', 'projectType', 'message'];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing field: $field"]);
        exit;
    }
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone']);
$projectType = htmlspecialchars($data['projectType']);
$message = htmlspecialchars($data['message']);

// Compose the email
$to = "info@multe.fi";
$subject = "New Contact Form Submission";
$headers = "From: noreply@multe.fi\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = <<<EOD
You have received a new message from the contact form:

Name: $name
Email: $email
Phone: $phone
Project Type: $projectType
Message:
$message
EOD;

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email."]);
}
?>
