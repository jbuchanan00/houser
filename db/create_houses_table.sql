create table houses(
    id serial primary key,
    name varchar(40),
    address varchar,
    city varchar,
    state varchar(10),
    zip varchar(5)
);
select * from houses