CREATE SCHEMA `colegio`  DEFAULT CHARACTER SET utf8 ;
USE   `colegio` ;
CREATE TABLE `colegio`.`cursos`(
`id`  INT NOT NULL AUTO_INCREMENT,
`name` varchar (255) NULL,
`n_reviews` INT NULL,
`teacher_id` INT ,
PRIMARY KEY (`id`));

CREATE TABLE `colegio`.`teacher`(
`id`  INT NOT NULL AUTO_INCREMENT,
`names` varchar (255) NULL, 
PRIMARY KEY (`id`));



INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES (100,'Fundamentos de SQL y Base de datos','1400','1');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('200','Curso de MySQL y Maria DB','400','25');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('260','Curso de Data Science','320','8');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('350','Curso de Firebase','150','1');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('749','Curso de Python','2300','8');
INSERT INTO `colegio`.`cursos` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('750','Curso de React.js','1500','16');

INSERT INTO `colegio`.`teacher` (`id`,`names`) VALUES (1,'Israel');
INSERT INTO `colegio`.`teacher` (`id`,`names`) VALUES ('8','Silvia');
INSERT INTO `colegio`.`teacher` (`id`,`names`) VALUES ('16','Leomaris');
INSERT INTO `colegio`.`teacher` (`id`,`names`) VALUES ('25','Juan');


SELECT  teacher_id, COUNT(teacher_id) AS Cursos_profe
FROM cursos
GROUP BY teacher_id;

SELECT  teacher_id, COUNT(teacher_id) AS Cursos_profe, SUM(n_reviews) total_reviews
FROM cursos
GROUP BY teacher_id;