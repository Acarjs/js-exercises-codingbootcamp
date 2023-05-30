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

/**
 * just an alias - an easier way to call
 * session()->old($key, $default)
 */
function old($key, $default = null)
{
    return session()->old($key, $default);
}