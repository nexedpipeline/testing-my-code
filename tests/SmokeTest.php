<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

final class SmokeTest extends TestCase
{
    /**
     * @test
     * @coversNothing
     */
    public function testThePhpunitFrameworkIsWorkingCorrectly(): void
    {
        $this->assertTrue(
            true,
            'Failed to assert that true is true. The testing environment is broken.'
        );
    }
}