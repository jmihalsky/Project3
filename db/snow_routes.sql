DROP DATABASE IF EXISTS snow_routes;
CREATE DATABASE snow_routes;

USE snow_routes;

CREATE TABLE usr (
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(20) NOT NULL,
    email varchar(20) NOT NULL,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    pword varchar(128) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE user_favs (
    user_id int NOT NULL,
    resort_id int NOT NULL
);

CREATE TABLE resorts (
    resort_id int NOT NULL AUTO_INCREMENT,
    resort_name varchar(30) NOT NULL,
    resort_region varchar(15),
    address1 varchar(50),
    address2 varchar(50),
    city varchar(50),
    state varchar(10),
    postal_code varchar(10),
    lat decimal(15,12),
    lon decimal(15,12),
    status varchar(20),
    num_slopes int,
    num_slopes_open int,
    web_link varchar(50),
    map_link varchar(50),
    PRIMARY KEY (resort_id)
);

CREATE TABLE resort_conditions (
    report_date date NOT NULL,
    resort_id int NOT NULL,
    new_snow int,
    base_depth_min int,
    base_depth_max int,
    cond text,
    num_slopes_open int,
    num_lifts_open int,
    PRIMARY KEY(report_date,resort_id)
);

CREATE TABLE user_res_conditions (
    cond_id int NOT NULL AUTO_INCREMENT,
    resort_id int NOT NULL,
    user_id int NOT NULL,
    report_date date NOT NULL,
    new_snow int,
    temp int,
    lft_lines varchar(20),
    cond_notes text,
    PRIMARY KEY (cond_id)
);

CREATE VIEW resort_weather
AS 
select resorts.resort_id,
    resorts.resort_name,
    resorts.resort_region,
    resorts.address1,
    resorts.address2,
    resorts.city,
    resorts.state,
    resorts.postal_code,
    resorts.lat,
    resorts.lon,
    resorts.status,
    resorts.num_slopes,
    resorts.web_link,
    resorts.map_link,
    b.report_date,
    b.new_snow,
    b.base_depth_min,
    b.base_depth_max,
    b.cond,
    b.num_slopes_open,
    b.num_lifts_open
from resorts
    inner join
    (select resort_conditions.*
    from resort_conditions
        inner join 
        (select resort_id,
            max(report_date) report_date
        from resort_conditions
        group by resort_id) as a 
        on resort_conditions.resort_id = a.resort_id
        and resort_conditions.report_date = a.report_date) as b 
    on resorts.resort_id = b.resort_id;


CREATE VIEW usr_resort_favs
AS
select usr.user_id,
    usr.user_name,
    usr.email,
    usr.first_name,
    usr.last_name,
    resorts.resort_id,
    resorts.resort_name,
    resorts.resort_region,
    resorts.address1,
    resorts.address2,
    resorts.city,
    resorts.state,
    resorts.postal_code,
    resorts.lat,
    resorts.lon,
    resorts.status,
    resorts.num_slopes,
    resorts.web_link,
    resorts.map_link,
    b.new_snow,
    b.base_depth_min,
    b.base_depth_max,
    b.cond,
    b.num_slopes_open,
    b.num_lifts_open
from usr    
    inner join user_favs
    on usr.user_id = user_favs.user_id
    inner join resorts
    on user_favs.resort_id = resorts.resort_id
    left join
        (select resort_conditions.*
        from resort_conditions
            inner join
                (select resort_id,
                    max(report_date) report_date
                from resort_conditions
                group by resort_id) as a
            on resort_conditions.resort_id = a.resort_id
            and resort_conditions.report_date = a.report_date) as b 
    on resorts.resort_id = b.resort_id;

CREATE VIEW user_reports
AS
select user_res_conditions.cond_id,
    user_res_conditions.resort_id,
    user_res_conditions.user_id,
    usr.user_name,
    user_res_conditions.report_date,
    user_res_conditions.new_snow,
    user_res_conditions.temp,
    user_res_conditions.lft_lines,
    user_res_conditions.cond_notes
from user_res_conditions
    inner join usr
    on user_res_conditions.user_id = usr.user_id;