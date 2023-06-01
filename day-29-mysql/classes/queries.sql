--LIKE in SQL:

--Selects ALL rows from countries where the region is "%"(whatever) Europe
SELECT *
FROM `countries`
WHERE `region` LIKE '% Europe';

--Selects ALL rows from countries where the region is "%"(whatever) Southern "%"(whatever)
SELECT *
FROM `countries`
WHERE `region` LIKE '%southern %'; --Doesn't have to be CASE SENSITIVE but SHOULD BE i.e. '%Southern %'

--Selects ALL rows from countries where the region is Southern and exactly any 6 characters after, only showing first 10 results
SELECT *
FROM `countries`
WHERE `region` LIKE "Southern ______"
LIMIT 0, 10;

--Selects ALL rows from countries where the region is Southern Europe OR Southern Africa
SELECT *
FROM `countries`
WHERE `region` = "Southern Europe" OR  `region` = "Southern Africa";

--Selects ALL rows from countries where the region is Southern Europe AND population is greater than 10,000,000
SELECT *
FROM `countries`
WHERE `region` = "Southern Europe" AND  `population` > "10000000";

--Selects ALL rows from countries where the region is Southern Europe OR population is greater than 100,000,000
SELECT *
FROM `countries`
WHERE `region` = "Southern Europe" OR  `population` > "100000000";

--IN in SQL

--Selects ALL rows from countries where the region is Southern Europe OR Southern Africa OR Eastern Europe
SELECT *
FROM `countries`
WHERE `region` IN ("Southern Europe", "Southern Africa", "Eastern Europe");
