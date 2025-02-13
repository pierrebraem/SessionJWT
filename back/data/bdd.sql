CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150) NOT NULL,
    password TEXT NOT NULL,
    is_admin INT NOT NULL DEFAULT 0
);