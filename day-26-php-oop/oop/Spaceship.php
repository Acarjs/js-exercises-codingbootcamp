<?php

class Spaceship
{
    // direction in which the spaceship is moving
    public ?string $movingDirection = null;

    public ?string $name = null;

    public ?Captain $captain = null;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function goForward() : void
    {
        $this->movingDirection = 'forward';
    }

    public function goBackward() : void
    {
        $this->movingDirection = 'backward';
    }

    public function fly(int $duration)
    {
        // calculate the next position based on the fly duration
        // and the movingDirection
    }

    public function setName(string $new_ship_name) : void
    {
        $this->name = $new_ship_name;
    }

    public function getName() : ?string
    {
        return $this->name;
    }

    public function assignCaptain(Captain $new_captain)
    {
        $this->captain = $new_captain;
    }
}




