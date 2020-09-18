<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $phone = trim($_POST['phone']);
        $check = $_POST['check'] ?? 0;


        class Alarmer
        {

            /**
             * Отправляет уведомление
             * @param string $key - ваш API-KEY
             * @param string $message - сообщение
             */
            static public function send($key, $message)
            {
                $ch = curl_init("https://alarmerbot.ru/");
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 3);
                curl_setopt($ch, CURLOPT_POSTFIELDS, array(
                    "key" => $key,
                    "message" => $message,
                ));
                curl_exec($ch);
                curl_close($ch);
            }

        }

        if (strlen($phone) > 0 && preg_match('/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/', $phone) && $check !== 0) {
            Alarmer::send('35f401-ab1316-8ff898', 'Заявка от '.$phone);
        }
    }

    header('Location: /');
    exit;
?>
