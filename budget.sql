\c budget;
DROP TABLE labor;
DROP TABLE travel;
DROP TABLE materials;
CREATE TABLE labor (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    month1rate NUMERIC DEFAULT 0,
    month2rate NUMERIC DEFAULT 0,
    month3rate NUMERIC DEFAULT 0,
    month4rate NUMERIC DEFAULT 0,
    month5rate NUMERIC DEFAULT 0,
    month6rate NUMERIC DEFAULT 0  
    );
CREATE TABLE travel (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR,
    destination VARCHAR,
    month CHAR(3),
    days INTEGER,
    mileage INTEGER DEFAULT 0
);
CREATE TABLE materials (
    id SERIAL NOT NULL PRIMARY KEY,
    titlem VARCHAR,
    description VARCHAR,
    monthm CHAR(3),
    cost INTEGER
);
/* 
INSERT INTO labor (name, category, month1rate, month2rate, month3rate, month4rate, month5rate, month6rate)
    VALUES ('John Farmer', 'Engr2', .5, .5, .5, .5, .5, .5);

INSERT INTO travel (title, destination, month, days, mileage)
    VALUES ('Payload Review', 'Huntsville', 'Apr', 3, 50);

INSERT INTO materials (titlem, description, monthm, cost)
    VALUES ('Relaxation', 'Margarita Machine', 'Jan', 300);
 */