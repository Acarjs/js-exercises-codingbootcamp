<?php

namespace PolakJan\Website;

// before:      Page
// now (FQN):   PolakJan\Website\Page
class Page
{
    public $title = null;
    public $body = '';
    public $meta_tags = [];

    public function render()
    {
        // renders the HTML of the page
    }
}