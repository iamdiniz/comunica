create table duvida (
  id bigint not null auto_increment,
  title varchar(60) not null,
  
  primary key(id)
)engine=InnoDB default charset=utf8;