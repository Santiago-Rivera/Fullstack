UPDATE visited_countries
SET user_id = 2, country_id = 3
WHERE user_id = 1 AND country_id = 2;

UPDATE users
SET email = 'new_email@example.com', password = 'newpassword123'
WHERE id = 1;

UPDATE countries
SET name = 'New Country Name', code = 'NC'
WHERE id = 3;