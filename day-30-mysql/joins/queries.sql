-- BASIC LEFT JOIN, ALL, NO FILTER
SELECT * FROM `cities`
LEFT JOIN `countries`
ON `cities`.`country_id` = `countries`.`id`
WHERE 1;

-- LEFT JOIN, EXAMPLE OF WHERE USAGE
SELECT * FROM `cities`
LEFT JOIN `countries`
ON `cities`.`country_id` = `countries`.`id`
WHERE `countries`.`name` = “Bulagria”;
-- LEFT JOIN, YOUR WHERE CAN BE ANYTHING IT CAN BE WITHOUT JOIN
SELECT * FROM `cities`
LEFT JOIN `countries`
ON `cities`.`country_id` = `countries`.`id`
WHERE `countries`.`population` > 200000000;

-- ALIASING - so er can have disting column names in the combined table
SELECT  `cities`.`population` AS `city_pop`,
        `countries`.`population` AS `country_pop`
FROM `cities` LEFT JOIN `countries` ON `cities`.`country_id` = `countries`.`id`
WHERE 1;