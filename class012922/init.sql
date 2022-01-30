-- CREATE TABLE author(

--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean

-- )

-- INSERT INTO author VALUES
-- ('Michael','google.com', 'mkuek', 100, 'M', '2022-01-29', TRUE),
-- ('Matthew','google.com', 'mkuek', 50, 'M', '2022-01-29', TRUE),
-- ('Christy','google.com', 'mkuek', 80, 'F', '2022-01-29', TRUE),
-- ('Anna','google.com', 'mkuek', 25, 'F', '2022-01-29', TRUE);

-- CREATE TABLE authors(

-- id SERIAL PRIMARY KEY,
-- title varchar(100)

-- );

-- INSERT INTO authors VALUES
-- (DEFAULT,'Jose'),
-- (DEFAULT,'Lois'),
-- (DEFAULT,'Jawan'),
-- (DEFAULT,'Intisar');

-- SELECT * FROM authors;
-- SELECT name, points FROM author;
-- SELECT title FROM authors;
-- DELETE  FROM author ;
-- UPDATE author SET points=99;
-- UPDATE authors SET title='Michael' WHERE title='Jose';
-- UPDATE authors SET title='Michael' WHERE id=1;
-- SELECT * from author WHERE points <99
-- SELECT name, points from author WHERE points <99;
-- SELECT * FROM authors WHERE title ilike '%oi%';

-- ALTER TABLE 
-- authors 
-- ADD
-- city 
-- varchar(100);

-- ALTER TABLE
-- authors
-- ALTER COLUMN
-- title

-- ALTER TABLE
-- authors
-- DROP COLUMN
-- city;

-- SELECT AVG(points) FROM author;

-- CREATE TABLE articles(
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES authors(id)
-- );

-- INSERT INTO articles VALUES 
-- (DEFAULT, 'JS Prototypes', 1), 
-- (DEFAULT, 'JS Promises', 3),
-- (DEFAULT, 'Express Routes', 10),
-- (DEFAULT, 'Styling with Bootstrap', 4),
-- (DEFAULT, 'API calls with Google Maps', 3),
-- (DEFAULT, 'Python RPG Game', 1),
-- (DEFAULT, 'Object Oriented Programming in JS', 1),
-- (DEFAULT, 'Nested For Loops', 1),
-- (DEFAULT, 'Preparing for Technical Interviews', 1),
-- (DEFAULT, 'Why I went to a coding camp', 1),
-- (DEFAULT, 'Coding in Romanian', 2),
-- (DEFAULT, 'Fizz Buzz - The Solution', 9),
-- (DEFAULT, 'Recursive Fibonacci with Memoization', 9),
-- (DEFAULT, 'Merge Sort', 15);

-- SELECT authors.title, articles.title FROM 
-- authors
-- INNER JOIN
-- articles
-- ON
-- authors.id=articles.author_id;

SELECT authors.title, articles.title FROM 
authors
LEFT OUTER JOIN
articles
ON
authors.id=articles.author_id;