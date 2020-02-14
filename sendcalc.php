
<?php
if (!$_POST) exit('No direct script access allowed');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $message  = "Автомобиль: " . $_POST['autoc'] . "\r\n";
    $message .= "Услуга: " . $_POST['cervicec'] . "\r\n";
    $message .= "Сумма: " . $_POST['itog'];
    
    $to = 'edel_08@mail.ru'; 
    $subject = 'Письмо с обратной связи';
  	$headers = 'From: cu41237@vh108.timeweb.ru' . "\r\n" .
      		     'Reply-To: cu41237@vh108.timeweb.ru' . "\r\n" .
    		       'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);
}

 ?>
