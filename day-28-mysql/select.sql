SELECT *
FROM `countries`;

SELECT *
FROM `countries`
WHERE `population` > 9000000
    AND `population` < 11000000;

-- this is a comment
SELECT *
FROM `countries`
WHERE `population` > 20000000;


SELECT `region`, `population`, `name`
FROM `countries`
WHERE `population` > 20000000;


-- subquery example
SELECT *
FROM (
    SELECT *
    FROM `countries`
    WHERE `population` > 20000000
) large_countries
WHERE `continent` = 'Europe';


SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population` DESC;

SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population` DESC
LIMIT 10;

SELECT `id`, `name`, `population`
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population` DESC
LIMIT 10;

SELECT *
FROM `countries`
WHERE `name` = 'Czech Republic'
LIMIT 1;
-- 56

SELECT *
FROM `cities`
WHERE `country_id` = 56
ORDER BY `population` DESC
LIMIT 10;


SELECT *
FROM `countries`
ORDER BY `continent` ASC,
    `name` ASC
LIMIT 40, 20;