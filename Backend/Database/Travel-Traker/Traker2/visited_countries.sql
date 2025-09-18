-- Active: 1758168215002@@127.0.0.1@5432@santiago
CREATE TABLE visited_countries (
	id SERIAL PRIMARY KEY NOT NULL,
	country_code CHAR(2) NOT NULL UNIQUE
);

SELECT * FROM visited_countries;