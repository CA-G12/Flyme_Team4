BEGIN;

DROP TABLE IF EXISTS pilots, flights, flight_attendants CASCADE;

CREATE TABLE pilots(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url TEXT Default 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
    experience TEXT NOT NULL
);

CREATE TABLE flights(
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time VARCHAR(200) NOT NULL,
    directions VARCHAR(255) NOT NULL,
    pilot_id INTEGER NOT NULL,
    FOREIGN KEY (pilot_id) REFERENCES pilots(id) on delete CASCADE
);


CREATE TABLE flight_attendants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    flight_id INTEGER NOT NULL,
    FOREIGN KEY (flight_id) REFERENCES flights(id)
);

INSERT INTO pilots(name, experience) VALUES ('Alex', 'lorem ipsum'),('Jhon', 'lorem');


COMMIT;