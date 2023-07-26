  /*Filtros de diferentes formas*/
    SELECT * 
    FROM categoriass
    WHERE id <50;
    
        SELECT * 
    FROM categoriass
    WHERE id >50;
    
            SELECT * 
    FROM categoriass
    WHERE id =50;

        SELECT * 
    FROM categoriass
    WHERE estatus = 'activo';

        SELECT * 
    FROM categoriass
    WHERE estatus = 'inactivo';
    
       SELECT * 
	FROM categoriass
    WHERE estatus != 'activo';
    
    /*Traer lo que le pido (LIKE)*/
           SELECT * 
    FROM categoriass
    WHERE titulo LIKE '%escandalo%' ;

    SELECT * 
    FROM categoriass
    WHERE titulo LIKE 'escandalo%' ;

    SELECT * 
    FROM categoriass
    WHERE titulo LIKE '%roja' ;

    SELECT * 
    FROM categoriass
    WHERE fecha_publicacion >'2025-01-01' ;
    
    SELECT * 
    FROM categoriass
    WHERE fecha_publicacion  BETWEEN '2023-01-01'AND '2025-12-31' ;
    
     
    SELECT * 
    FROM categoriass
    WHERE id  BETWEEN '50'AND '60' ;
     
    SELECT * 
    FROM categoriass
    WHERE YEAR(fecha_publicacion) BETWEEN '2023' AND '2024';
    
    
    SELECT * 
    FROM categoriass
    WHERE MONTH(fecha_publicacion) ='04';
    /*Entre una fecha y otra*/
    /*/Filtros*/
    
    ------------------------------------------------
    CREATE SCHEMA `colegio`  DEFAULT CHARACTER SET utf8 ;
USE   `colegio` ;
CREATE TABLE `colegio`.`cursos`(
`id`  INT NOT NULL AUTO_INCREMENT,
`name` varchar (255) NULL,
`n_reviews` INT NULL,
PRIMARY KEY (`id`));


INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`) VALUES (100,'Fundamentos de SQL y Base de datos','11');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`) VALUES ('200','Curso de MySQL y Maria DB','344');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`) VALUES ('260','Curso de Data Science','88');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`) VALUES ('350','Curso de Firebase','88');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`) VALUES ('749','Curso de Python','88');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`) VALUES ('750','Curso de React.js','88');

SELECT *
FROM cursos
WHERE n_reviews >= 1;

SELECT *
FROM cursos
WHERE n_reviews BETWEEN 1 AND 100;

SELECT name
FROM cursos
WHERE name LIKE '%SQL%';



