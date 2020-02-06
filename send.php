
<?php
if (!$_POST) exit('No direct script access allowed');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message  = "Автомобиль: " . trim(strip_tags($_POST['auto'])) . "\r\n";
    $message .= "Телефон: " . "+7" . trim(strip_tags($_POST['phone'])) . "\r\n";
    $message .= "Дата заезда: " . $_POST['date'];
    
    $to = 'edel_08@mail.ru'; 
    $subject = 'Письмо с обратной связи';
  	$headers = 'From: cu41237@vh108.timeweb.ru' . "\r\n" .
      		     'Reply-To: cu41237@vh108.timeweb.ru' . "\r\n" .
    		       'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);
}

 ?>
