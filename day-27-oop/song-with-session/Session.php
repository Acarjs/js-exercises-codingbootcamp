<?php

class Session
{
    // the singleton instance of Session, representing
    // the session that we are working with (there is always
    // just one)
    public static ?Session $instance = null;

    public static function instance() : Session
    {
        if (static::$instance === null) {
            // if the static property $instance is still null
            // i.e. it has not been initialized yet

            // create a new object (new instance) of this class
            // and put it into the static $instance property
            static::$instance = new static;
        }

        // always return the static property $instance
        return static::$instance;
    }


    // the data from the session
    public $data = [];

    /**
     * called automatically when a new Session object is being
     * created
     *
     * thanks to the ::instance() method, that will happen only
     * once
     */
    public function __construct()
    {
        // start the session
        session_start();

        // "load" the data from the session into this object's
        // ->data property
        $this->data = $_SESSION;
    }

    /**
     * puts a value into the session
     *
     * updates both the local property ->data and the
     * superglobal $_SESSION
     */
    public function put($key, $value)
    {
        $this->data[$key] = $value;

        $_SESSION[$key] = $value;
    }
}