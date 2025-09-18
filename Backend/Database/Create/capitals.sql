-- Active: 1758151601480@@127.0.0.1@5432@santiago
CREATE TABLE capitals (
	id SERIAL PRIMARY KEY UNIQUE NOT NULL,
	country VARCHAR(45),
	capital VARCHAR(45)
);

SELECT * FROM capitals;