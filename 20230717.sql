CREATE SCHEMA `colegio`  DEFAULT CHARACTER SET utf8mb4 ;
USE   `colegio` ;
CREATE TABLE `colegio`.`cursos`(
`id`  INT NOT NULL AUTO_INCREMENT,
`nombre` varchar (255) NULL,
`profe` varchar (255) NULL,
`n_calificaciones` INT NULL,
PRIMARY KEY (`id`));


INSERT INTO `colegio`.`cursos` (`id`,`nombre`,`profe`,`n_calificaciones`) VALUES (1,'Fundamentos de base de datos','Israel','580');
INSERT INTO `colegio`.`cursos` (`id`,`nombre`,`profe`,`n_calificaciones`) VALUES ('2','MySQL y Maria DB','Carlos','180');
INSERT INTO `colegio`.`cursos` (`id`,`nombre`,`profe`,`n_calificaciones`) VALUES ('3','PostgreSQL','Oswaldo','150');

SELECT COUNT(*)
FROM cursos;  

SELECT COUNT(*) AS cantidad
FROM cursos;  

SELECT nombre AS name, profe AS teacher, n_calificaciones AS n_reviews
FROM categoriass;