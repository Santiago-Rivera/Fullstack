-- Active: 1758168215002@@127.0.0.1@5432@santiago
CREATE TABLE countries (
	id SERIAL PRIMARY KEY UNIQUE NOT NULL,
	country_code VARCHAR(45),
	country_name VARCHAR(45)
);

SELECT * FROM countries