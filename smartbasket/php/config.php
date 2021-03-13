<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		  require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		  const HOST = 'smtp.mail.ru';
		  const LOGIN = 'zzzelen01@mail.ru';
		  const PASS = 'Ss123!!?';
		  const PORT = '465';

		// *** /SMTP *** //
   
    const SENDER = 'zzzelen01@mail.ru';
    const CATCHER = 'vinzenzodecor@gmail.com';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    