<?php

$msg_box = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // собираем данные из формы
    $message  = "Автомобиль: " . $_POST['auto'] . "<br>";
    $message .= "Телефон: " . $_POST['phone'] . "<br><br>";
    $message .= "Дата заезда: " . $_POST['data'];
        
    send_mail($message); // отправим письмо
    // выведем сообщение об успехе

// делаем ответ на клиентскую часть в формате JSON
echo json_encode(array(
    'result' => $msg_box
));
  
  
// функция отправки письма
function send_mail($message){
    // почта, на которую придет письмо
    $mail_to = "edel_08@mail.ru"; 
    // тема письма
    $subject = "Письмо с обратной связи";
      
    // заголовок письма
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: cu41237@vh108.timeweb.ru \r\n"; // от кого письмо
   

    // отправляем письмо 
    mail($mail_to, $subject, $message, $headers);
        
    
}
}
 ?>