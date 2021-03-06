DROP TABLE IF EXISTS 'users';
DROP TABLE IF EXISTS 'reports';
DROP TABLE IF EXISTS 'presentation';


CREATE TABLE
IF NOT EXISTS users
(
    email VARCHAR
(255) PRIMARY KEY NOT NULL,
    firstname VARCHAR
(255) NOT NULL,
    lastname VARCHAR
(255) NOT NULL,
    birthday VARCHAR
(20) NOT NULL,
    password VARCHAR
(60) NOT NULL,
    UNIQUE
(email)
);

CREATE TABLE
IF NOT EXISTS reports
(
    kmom INT PRIMARY KEY NOT NULL,
    text VARCHAR
(1000)
);

CREATE TABLE
IF NOT EXISTS presentation
(
    name VARCHAR
(20) NOT NULL,
    text VARCHAR
(500) NOT NULL
);