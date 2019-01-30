DROP DATABASE IF EXISTS snow_routes;
CREATE DATABASE snow_routes;

USE snow_routes;

CREATE user (
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(20) NOT NULL,
    email varchar(20) NOT NULL,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    pword varchar(128) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE user_favs (
    user_id int NOT NULL,
    resort_id int NOT NULL
);

CREATE resorts (
    resort_id int NOT NULL AUTO_INCREMENT,
    resort_name varchar(30) NOT NULL,
    resort_region varchar(15),
    address1 varchar(50),
    address2 varchar(50),
    city varchar(50),
    state varchar(10),
    postal_code varchar(10),
    status varchar(20),
    num_slopes int,
    num_slopes_open int,
    web_link varchar(50),
    map_link varchar(50)
    PRIMARY KEY (resort_id)
);