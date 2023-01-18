DROP DATABASE IF EXISTS take_home_dev;
CREATE DATABASE take_home_dev;

\c take_home_dev;

DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS raffles;


CREATE TABLE raffles (
    id SERIAL PRIMARY KEY, 
    rname TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- date-raffled TIMESTAMP NOT NULL,
    secret_token TEXT NOT NULL
);

CREATE TABLE participants (
    id SERIAL PRIMARY KEY, 
    raffleid INTEGER REFERENCES raffles (id)
    ON DELETE CASCADE,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    email TEXT NOT NULL,
    phone VARCHAR(11)
);