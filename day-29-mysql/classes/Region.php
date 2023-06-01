<?php

require_once "DB.php";

class Region
{
    public $id = null;
    public $name = null;
    public $slug = null;

    public function insert()
    {
        echo "inserting<br>";
        DB::insert("
            INSERT INTO `regions`
            (`name`, `slug`)
            VALUES
            (?, ?)
        ",
        [
            $this->name,
            $this->slug,
        ]);
        $this->id = DB::lastInsertId();
    }

    public function update()
    {
        echo "updating<br>";
        DB::update("
            UPDATE `regions`
            SET `name` = ?,
                `slug` = ?

            WHERE `id` = ?
        ",
        [
            $this->name,
            $this->slug,
            $this->id,
        ]);
    }

    public function save()
    {
        if ($this->id == null) {
            $this->insert();
        } else {
            $this->update();
        }
    }
}