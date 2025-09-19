ALTER TABLE visited_countries
	ADD UNIQUE(user_id, country_code)

INSERT INTO visited_countries (user_id, country_code)
VALUES (7, 'BR');