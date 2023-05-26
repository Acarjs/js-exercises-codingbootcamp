<?php

// mimic catfact/fact (random fact)
$catFact = [
    'fact' => "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
];

// mimic catfact/facts?limit=X (first X facts)
$catFacts = [
    'data' => [
        [
            'fact' => "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
        ],
        [
            'fact' => "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
        ],
    ]
];

echo (json_encode($catFact));