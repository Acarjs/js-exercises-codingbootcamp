<?php

require_once 'Session.php';

/**
 * just an alias - an easier way to call
 * Session::instance()
 */
function session()
{
    return Session::instance();
}