-- Active: 1758168215002@@127.0.0.1@5432@santiago
CREATE TABLE food (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    country VARCHAR(45) NOT NULL,
    rice_production FLOAT,
    wheat_production FLOAT
);

-- Select all

SELECT * FROM food

-- Select specific columns

SELECT country FROM food;

SELECT rice_production FROM food;

SELECT country, wheat_production FROM food;

-- Filter rows with WHERE clause

SELECT * FROM food WHERE country = 'India';

SELECT * FROM food WHERE rice_production > 500;

SELECT * FROM food WHERE wheat_production <= 300;

SELECT * FROM food WHERE rice_production > 1000 AND wheat_production < 500;
SELECT * FROM food WHERE country = 'China' OR country = 'USA';

SELECT * FROM food WHERE country IN ('India', 'China', 'USA');

SELECT * FROM food WHERE country LIKE 'I%';

-- Sort results with ORDER BY

SELECT * FROM food ORDER BY rice_production DESC;

SELECT * FROM food ORDER BY country ASC;

SELECT * FROM food ORDER BY wheat_production ASC, rice_production DESC;

-- Aggregate functions
SELECT AVG(rice_production) FROM food;

SELECT SUM(wheat_production) FROM food WHERE country = 'India';

SELECT COUNT(*) FROM food WHERE rice_production > 500;

-- Group results with GROUP BY
SELECT country, SUM(rice_production) AS total_rice FROM food GROUP BY country;

SELECT country, AVG(wheat_production) AS avg_wheat FROM food GROUP BY country HAVING AVG(wheat_production) > 200;