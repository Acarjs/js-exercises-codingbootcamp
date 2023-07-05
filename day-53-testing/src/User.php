<?php

/**
 * class User
 *
 * should be usable as a string
 */
class User
{
    public $email_address = null;

    /**
     * @param $email - valid email address
     */
    public function __construct($email = null)
    {
        if (
            $email !== null
            && false === filter_var($email, FILTER_VALIDATE_EMAIL)
        ) {
            throw new \InvalidArgumentException('Invalid email address');
        }

        $this->email_address = $email;
    }

    public function __toString()
    {
        return $this->email_address;
    }
}