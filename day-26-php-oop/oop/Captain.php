<?php

class Captain
{
    public ?string $first_name = null;
    public ?string $last_name = null;
    public ?int $age = null;
    public ?string $ranking = null;
    public array $skills = [];

    public function __construct(string $first_name, ?string $last_name = null)
    {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
    }

    public function addSkill(string $skill_name) : void
    {
        $this->skills[] = $skill_name;
    }

}