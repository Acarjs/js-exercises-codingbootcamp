<?php

require_once 'vendor/autoload.php';

$client = new GuzzleHttp\Client();

$res = $client->request('GET', 'https://www.metacritic.com/movie/the-shawshank-redemption', [
    'verify' => false
]);

echo str_replace('"/css/', '"https://www.metacritic.com/css/', $res->getBody());