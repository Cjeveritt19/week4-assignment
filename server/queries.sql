create table guestbook (
  id INT primary key generated always as identity,
  name TEXT,
  email TEXT,
  reason TEXT,
  number TEXT
);

insert into 
  guestbook (name, email, reason, number)
  values
    ('Billy Joel', 'billyjo12@gmail.com', 'Buisness', '07898737221'),
    ('Jerry Gomez', 'jgomez12@gmail.com', 'Pleasure', '07654123451');

    select * from guestbook;


    select name, location from staff;


    select from staff where name = 'Jerry';