<?php

namespace Exercises\Testing;

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testBoolean()
    {
        $this->assertTrue( true );
    }

    public function testMultiplyResult()
    {
        $operand_a = 3;
        $operand_b = 4;

        // set up an expected result
        $expected_result = 12;

        // perform the actual operation, get the actual result
        $actual_result = Math::multiply($operand_a, $operand_b);

        // assert that the expected result will be the same
        // as the actual result
        $this->assertSame($expected_result, $actual_result);
    }

    public function testMultiplyResultShort()
    {
        $this->assertSame(12, Math::multiply(3, 4));
    }

    public function testDivideResult()
    {
        $this->assertSame(
            3,
            Math::divide(12, 4)
        );
    }

    public function testDivideFirstArgumentNotNumericThrowsException()
    {
        $this->expectException('InvalidArgumentException');

        Math::divide('abc', 4);
    }

    public function testDivideSecondArgumentNotNumericThrowsException()
    {
        $this->expectException('InvalidArgumentException');

        Math::divide(12, 'abc');
    }

    public function testDivideByZeroThrowsException()
    {
        $this->expectException('DivisionByZeroError');

        Math::divide(12, 0);
    }
}