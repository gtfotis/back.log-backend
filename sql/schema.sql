CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE backlog (
    id serial PRIMARY KEY,
    game_id integer(50) NOT NULL,
    date_added date,
    user_id uuid REFERENCES users(user_id)
)


CREATE TABLE currently_playing (
    id serial PRIMARY KEY,

);

CREATE TABLE games_beaten (
    id serial PRIMARY KEY,

);

CREATE TABLE favorites (
    id serial PRIMARY KEY,

);