CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE currently_playing (
    id serial PRIMARY KEY,

);

CREATE TABLE games_beaten (
    id serial PRIMARY KEY,

);

CREATE TABLE favorites (
    id serial PRIMARY KEY,

);