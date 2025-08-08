<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name       = $_POST['name'] ?? '';
    $email      = $_POST['email'] ?? '';
    $phone      = $_POST['phone'] ?? '';
    $experience = $_POST['experience'] ?? '';
    $message    = $_POST['message'] ?? '';
    $position   = $_POST['position'] ?? '';

    $cvFile = $_FILES['cv'];

    if ($cvFile['error'] === UPLOAD_ERR_OK) {
        $cvPath = 'uploads/' . basename($cvFile['name']);
        move_uploaded_file($cvFile['tmp_name'], $cvPath);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'File upload failed']);
        exit;
    }

    // Email sending (basic)
    $to = 'info@multe.fi';
    $subject = "Uusi hakemus: $position";
    $body = "Nimi: $name\nSähköposti: $email\nPuhelin: $phone\nKokemus: $experience\n\nViesti:\n$message\n\nCV: $cvPath";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Email sending failed']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
