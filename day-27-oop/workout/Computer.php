<?php

// 1.
class Computer
{
    // 2.
    public ?string $model = null;
    public ?string $operating_system = null;
    public bool $is_portable = false;
    public string $status = 'off';

    // 6.
    public function switchOff() : void
    {
        $this->status = 'off';
    }

    // 7.
    public function toggleSwitch() : void
    {
        $this->status = $this->status === 'off' ? 'on' : 'off';

        // same as the line above:
        // if ($this->status === 'off') {
        //     $this->status = 'on';
        // } else {
        //     $this->status = 'off';
        // }
    }
}