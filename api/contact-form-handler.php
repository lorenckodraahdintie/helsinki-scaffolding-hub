<?php
// api/contact-form-handler.php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// Support JSON and form-encoded bodies
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data)) {
    // Fallback to form fields
    $data = $_POST;
}

// Helper: sanitize simple text (avoid header injection)
function clean($v) {
    $v = trim($v ?? "");
    $v = str_replace(["\r", "\n"], " ", $v);
    return filter_var($v, FILTER_SANITIZE_STRING);
}

$name        = clean($data["name"] ?? "");
$email       = trim($data["email"] ?? "");
$phone       = clean($data["phone"] ?? "");
$projectType = clean($data["projectType"] ?? "");
$message     = trim($data["message"] ?? "");

// Basic validation
$errors = [];
if ($name === "")   { $errors[] = "Name is required"; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = "Valid email is required"; }
if ($message === "") { $errors[] = "Message is required"; }

if ($errors) {
    http_response_code(400);
    echo json_encode(["error" => "Validation failed", "details" => $errors]);
    exit;
}

// Build email
$to      = "info@multe.fi"; // <-- change if needed
$subject = "New Contact Form Submission from {$name}";
$body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nProject Type: {$projectType}\n\nMessage:\n{$message}\n";
$headers = "From: noreply@multe.fi\r\n" .
           "Reply-To: {$email}\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Try to send
if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email (mail() returned false). Check server mail config or use authenticated SMTP/PHPMailer)."]);
}
