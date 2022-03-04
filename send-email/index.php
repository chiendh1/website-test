<?php
  require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';
  
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('19dfd4a3117524fe87118eeabb650f79','5a82209b108a0880a80ca96e443b45dd',true,['version' => 'v3.1']);
  // $emailTo = 'hello@magiccollc.com';
  $emailTo = 'minhpv@vinsofts.net';
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "pminh19056@gmail.com",
          'Name' => "Contact from Magiccollc"
        ],
        'To' => [
          [
            'Email' => $emailTo,
            'Name' => "Magiccollc"
          ]
        ],
        'Subject' => "Greetings from Magiccollc.",
        'TextPart' => "Mailjet email",
        'HTMLPart' => $_GET['body'],
        'CustomID' => "AppGettingStartedSendEmail"
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success();
  return 1;
?>