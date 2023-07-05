<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;

use User;

class UserTest extends TestCase
{
    /**
     * when it is all done and finished
     */
    public function testUserObjectCanBeCreatedWithAValidEmailAddressAndUsedAsAString()
    {
        $user = new User('john.doe@email.com');

        // assert that converting the user to a string
        // is the same as the string that was passed to its constructor
        $this->assertSame(
            'john.doe@email.com',
            (string)$user
        );
    }

    public function testUserObjectCanBeCreated()
    {
        $user = new User;

        $this->assertInstanceOf('User', $user);
    }

    public function testUserObjectCanBeCreatedWithEmailAddress()
    {
        $user = new User('john.doe@example.com');

        $this->assertInstanceOf('User', $user);
    }

    public function testUserObjectCreatedWithInvalidEmailAddressThrowsException()
    {
        $this->expectException('InvalidArgumentException');

        $user = new User('abc');
    }
}