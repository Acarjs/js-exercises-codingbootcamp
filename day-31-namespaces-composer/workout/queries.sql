-- 10 best (records from the table) movies
SELECT *
FROM `movies`
ORDER BY `rating` DESC
LIMIT 10;

-- 10 best movies with at least 5k votes
SELECT *
FROM `movies`
WHERE `votes_nr` >= 5000
ORDER BY `rating` DESC
LIMIT 10;

-- 10 best movies that are feature films and have at least 5k votes
-- looking at movie_types table ... id of 'feature' is 1
SELECT *
FROM `movies`
WHERE `votes_nr` >= 5000
    AND `movie_type_id` = 1
ORDER BY `rating` DESC
LIMIT 10;

-- What is the ID of the movie "Shawshank redemption"?
SELECT *
FROM `movies`
WHERE `name` LIKE '%Shawshank Redemption%';
-- 111161

-- insert a new movie
INSERT
INTO `movies`
(`name`, `length`, `year`, `rating`, `votes_nr`)
VALUES
('Spider-Man: Across the Spider-Verse', 140, 2023, 9.1, 50000);

-- what is the ID of the new movie?
SELECT *
FROM `movies`
WHERE `name` LIKE '%Across the Spider-Verse%';
-- 5863127

-- Update the movie's type, status and certification.
-- 'feature' film - movie_type_id 1
-- 'completed' status - movie_status_id 14
-- 'PG' certification - certification_id 27
UPDATE `movies`
SET `movie_type_id` = 1,
    `movie_status_id` = 14,
    `certification_id` = 27
WHERE `id` = 5863127;

-- select the movie including info from movie_types,
--   movie_statuses and certifications
SELECT `movies`.*,
    `movie_types`.`name` AS movie_type_name,
    `movie_statuses`.`slug` AS movie_status_slug,
    `certifications`.`slug` AS certification_slug
FROM `movies`
LEFT JOIN `movie_types`
    ON `movies`.`movie_type_id` = `movie_types`.`id`
LEFT JOIN `movie_statuses`
    ON `movies`.`movie_status_id` = `movie_statuses`.`id`
LEFT JOIN `certifications`
    ON `movies`.`certification_id` = `certifications`.`id`
WHERE `movies`.`id` = 5863127;