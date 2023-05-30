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

    // data of the previous request
    public $old_request = [];

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

        // take any potential flashed data and merge it into the data from $_SESSION
        $this->data = array_merge($this->data, $_SESSION['flashed_data'] ?? []);
        // now $this->data contains both everything that was in $_SESSION
        // and everything that was flashed

        // delete from the $_SESSION['flashed_data'] anything that might be there
        // i.e. finishing the flashing process for anything that was flashed
        unset($_SESSION['flashed_data']);

        // take any potential flashed request and put it into this Session object
        $this->old_request = $_SESSION['flashed_request'] ?? [];

        // delete from the $_SESSION['flashed_request'] anything that might be there
        // i.e. finishing the flashing process for any old request that was flashed
        unset($_SESSION['flashed_request']);
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

    /**
     * retrieves an item from the session using a specified key
     *
     * it not found, it returns the second argument
     */
    public function get($key, $default = null)
    {
        return $this->data[$key] ?? $default;
    }

    /**
     * puts a value into the session in such a way
     * that it can be automatically removed in the next
     * request
     */
    public function flash($key, $value)
    {
        $_SESSION['flashed_data'][$key] = $value;
    }


    /**
     * takes the entire current POST request
     * and stores it in the session
     */
    public function flashRequest()
    {
        $_SESSION['flashed_request'] = $_POST;
    }

    /**
     * retrieves an item from the previous request using
     * a specified key
     *
     * if not found, returns the second argument
     */
    public function old($key, $default = null)
    {
        return $this->old_request[$key] ?? $default;
    }
}