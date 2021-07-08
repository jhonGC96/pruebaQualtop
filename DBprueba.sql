CREATE DATABASE pruebaQualtop


CREATE TABLE dbo.Juguete (id_juguete int primary key not null identity (1, 1), 
descripcion_juguete varchar (50) not null, precio_juguete int NOT NULL, tamano_juguete VARCHAR(20))