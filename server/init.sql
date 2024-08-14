show databases;
-- drop database practiceDB;
-- drop database codingon;

-- create database codingon;
use codingon;

show tables;

-- create table Todo(
-- 	id int not null primary key auto_increment,
--     title varchar(100) not null,
--     done boolean not null default false
-- );



desc todo;

select * from todo;

insert into todo values( null, 'my todo1', 0 );
insert into todo values( null, 'my todo2', 1 );
insert into todo values( null, 'my todo3', 1 );
insert into todo values( null, 'my todo4', 1 );
insert into todo values( null, 'my todo5', 0 );
insert into todo values( null, 'my todo6', 0 );

update todo set title='내가 할일 2번' where id = 2;

-- delete from todo where id =3;

-- select * from mtsql.user;