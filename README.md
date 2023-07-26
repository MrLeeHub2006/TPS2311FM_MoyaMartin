# TPS2311FM_Moya_Martin
Desarrollo de proyecto de grado para TPS2023
 Si se me genera un mensaje de "respository not found".
 1. credenciales de windows administrador(credenciales de windows)
 2. navegador predeterminado 
 3. iniciar Sesion en visual

# [Curso de Fundamentos de Bases de Datos](https://platzi.com/cursos/bd/)

## Bienvenida conceptos básicos y contexto histórico de las Bases de Datos
### Bienvenida conceptos básicos y contexto histórico de las Bases de Datos
### Playground: tu primera consulta en bases de datos

## Introducción a las bases de datos relacionales
### Historia de las bases de datos relacionales
### Qué son entidades y atributos
### Entidades de Platzi Blog
### Relaciones
### Múltiples muchos
### Diagrama ER
### Diagrama Físico: tipos de datos y constraints
### Diagrama Físico: normalización
### Formas normales en Bases de Datos relacionales 
### Diagrama Físico: normalizando Platziblog

## RDBMS (MySQL) o cómo hacer lo anterior de manera práctica
### Instalación local de un RDBMS (Windows)
### ¿Qué es RDB y RDBMS?
### Instalación local de un RDBMS (Mac)
### Instalación local de un RDBMS (Ubuntu)
### Clientes gráficos
### Servicios administrados

## SQL hasta en la sopa

### Historia de SQL
 se crea en un momento historico de la tecnologia de la informacion, viene con la idea con un nuevo lenguaje, con objetivo, para poder consultar cualquier basede datos, para unificar archivos o cadenas de textos y/o archivos 
 SQL (stuctured query language)  NOSQL (NOT ONLY)
### DDL create
tiene dos sublenguajes 
DDL data definition languaje nos ayuda a crear la estructura los simientos, relaciones y demas de la base de datos, de una base de datos ya real 
comandos(create, alter alterar o modificar una de estas entidades, ejemplo agregando o quitando columnas, drop es soltar o dejar ir es la secuancia que nos va ayudar a borrar , se peude borrar toda la base de datos) una vista, una tabla y demas,
1. Create
    Database:
    ---------------------------------------------------------------
    CREATE SCHEMA `platziblog`  DEFAULT CHARACTER SET utf8 ;
    
    CREATE DATABASE test_db;

    USE DATABASE test_db;
-------------------------------------------------------------------

    Create table

    CREATE TABLE `platziblog`.`prueba`(
`person_id`  INT NOT NULL AUTO_INCREMENT,
`last_name` varchar (255) NULL,
`first_name` varchar (255) NULL,
`address` varchar (255) NULL,
`city` varchar (255) NULL,
PRIMARY KEY (`person_id`))



    ---------------------------------------------------------------
    INSERT INTO `platziblog`.`people` (`person_id`, `last_name`, `first_name`, `address`, `city`) 
VALUES ('1', 'Vásquez', 'Israel', 'Calle Famosa Num 1', 'México'),
        ('2', 'Hernández', 'Mónica', 'Reforma 222', 'México'),
        ('3', 'Alanis', 'Edgar', 'Central 1', 'Monterrey');
        --------------------------------------------------------------
    database:
    table: proyeccion o traduccion a SQL 
    view:  significa que lo que se esta ofreciendo es la proyeccion, de cuando tenemops normalizada la informacion, de partes de la informacion y hacer algo coherente.

    schema = base de datos 
    entidad = tabla

### Playground: CREATE TABLE
### CREATE VIEW y DDL ALTER
lo que hace es tomar la informacion de la base de datos, para consultar de manera recurrente, 
 asignar nombre, Create.
new para crear una lista 
se pone la B para que no lo tome como una tabla
    proyecta la informacion de la tabla en una lista, dar create view
### DDL drop
Data definition language

### Playground: VIEW, ALTER y DROP en SQL
### DML
### Playground: CRUD con SQL
### ¿Qué tan standard es SQL?
### Creando Platziblog: tablas independientes
### Creando Platziblog: tablas dependientes
### Creando Platziblog: tablas transitivas

## Consultas a una base de datos

### ¿Por qué las consultas son tan importantes?
puede salvar un negocio o una empresa ya qu enecesitan una gran necesidad corrercta exacta oportuna y demas.
cuando se unen a travez de query's por infomes o encuestas.
### Estructura básica de un Query
son la forma en como estructuramos preguntas y lo que un Query es como traducirlo para que la base de datos pueda entender para poder buscar es el pan de cada dia de las organizaciones que ayuda a tomar decisiones en las compañias
----------------------------------
 -Estructura basica
 SELECT city, count(*) AS total
 FROM people 
 WHERE  active = true
 GROUP BY city agrupar por una cantidad de ciudades

 ORDER BY total DESC
 HAVING  total <=2;

----------------------------------
Comandos 
- DROP
es la forma que estructuramos las preguntas que le haremos a la base de datos.
   el query cuenta con dos partes1. select y otra from

----------------------------------------
   SELECT *
FROM categoriass
where fecha_publicacion > '2024-01-01';
----------------------------------------------

----------------------------------------------
clase pasada query's


### SELECT
---------------------------------------
SELECT titulo, fecha_publicacion, estatus
FROM categoriass;  
----------------------------------------
 Se seleccionan los diferentes campos los que uno quiera y en el orden que yo quiera.
-----------------------------------------
SELECT titulo AS encabezado, fecha_publicacion AS publicado_en, estatus AS estado
FROM categoriass;  
-----------------------------------
El AS se usa para mostrar o consultar con el nombre que uno quiere AS -> apodo


### Playground: SELECT en SQL
### FROM y SQL JOINs
  indica de donde vamos a traer los datos, selecciona todo y traerlos.
   La union de las tablas. la informacion esta dispersa en distintas tablas.
   join juntar o unir y que nos ayuda a unir tablas a traves de las relaciones que nosotros hacemos como la llave primaria y la llave foranea de otra tabla
diferencia: lo que tenemos en un lado pero no tenemos en el otro left join( todos los datos de la tabla A se envian a la tabla B esten o no esteno en esa tabla) y right join (traer todos los posts que tengamos y solo los qu eno tengan usuarios asociados)
interseccion: union ( traer todo, no  importa los casos o posts y traera los posts si no tiene o no usuarios)o diferencia simétrica(solo los usuarios que no han hecho posts o los posts huerfanos y que no tengan dueño ni usuario.) 






### Utilizando la sentencia FROM
---------------------------------------------------------------------
SELECT *
FROM  usuarios
	LEFT JOIN categoriass ON usuarios.id = categoriass.usuario_id;
---------------------------------------------------------------------
  tengo todos lo susuarios sin importar que tengan y que no tengan posts
----------------------------------------------------------------------------------------------
  SELECT *
FROM usuarios
LEFT JOIN  categoriass ON usuarios.id = categoriass.usuario_id 
WHERE categoriass.id IS NULL;
-----------------------------------------------------------------------------------------------
SELECT *
FROM usuarios
	RIGHT JOIN  categoriass ON usuarios.id = categoriass.usuario_id 
WHERE categoriass.usuario_id IS NULL;
-----------------------------------------------------------------------------------------------
SELECT *
FROM usuarios
	INNER JOIN  categoriass ON usuarios.id = categoriass.usuario_id 
------------------------------------------------------------------------------------------

### Playground: FROM y LEFT JOIN en SQL


### WHERE

Es la sentencia que nos ayuda a juntar y mostrar datos o duplas, ya sea una fecha, numero, texto
Es el uso de la division o las limitaciones o filtros en una consulta
   ### /*Filtros de diferentes formas*/
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
    
    




Para que no sea igual a activo es !=(Que no sean el dato que le doy )

%%(significa traeme la palabra que yo le pudo que traiga)

### Utilizando la sentencia WHERE nulo y no nulo

  para consultar los valores nulos (Qie no tienen valores), si no que es un valor vacio, se busca con una snetencia particular. valores NOT NULL donde se usan los contraints 
  /*Valores nulos*/
    SELECT *
    FROM categoriass
    WHERE usuario_id IS NULL;

    SELECT *
    FROM categoriass
    WHERE usuario_id IS NOT NULL;
    
        SELECT *
    FROM categoriass
    WHERE usuario_id IS NOT NULL
    AND estatus ='activo' 
    AND id <50
    AND categoria_id =2 
    AND YEAR (fecha_publicacion)= '2025';

    /*/Valores nulos y no nulos*/
### Playground: Filtrando Datos con WHERE
### GROUP BY
SELECT estatus, COUNT(*) categoriass_quantily
FROM categoriass
GROUP BY estatus;

SELECT YEAR(fecha_publicacion) AS post_year, COUNT(*) AS  categoriass_quantify 
FROM categoriass
GROUP BY post_year;

SELECT MONTHNAME(fecha_publicacion) AS post_month, COUNT(*) AS  categoriass_quantify 
FROM categoriass
GROUP BY post_month;

SELECT estatus, MONTHNAME(fecha_publicacion) AS post_month, COUNT(*) AS  categoriass_quantify 
FROM categoriass
GROUP BY estatus, post_month;
Agrupar varios datos de informacion en una misma tabla 

### ORDER BY y HAVING
 SELECT  *
 FROM categoriass
 ORDER BY fecha_publicacion DESC;
 
  SELECT  *
 FROM categoriass
 ORDER BY titulo ASC;
 
   SELECT  *
 FROM categoriass
 ORDER BY titulo DESC;
 
   SELECT  *
 FROM categoriass
 ORDER BY usuario_id ASC;
 
   SELECT  *
 FROM categoriass
 ORDER BY usuario_id DESC;

 SELECT  *
 FROM categoriass
 ORDER BY fecha_publicacion ASC;
 
 SELECT  MONTHNAME(fecha_publicacion) AS post_month, estatus, COUNT(*) AS  categoriass_quantify 
FROM categoriass
GROUP BY estatus, post_month
ORDER BY post_month;

 SELECT  MONTHNAME(fecha_publicacion) AS post_month, estatus, COUNT(*) AS  categoriass_quantify 
FROM categoriass
WHERE categoriass_quantify >1 /*ERROR NO SE USA */
GROUP BY estatus, post_month
ORDER BY post_month;

SELECT  MONTHNAME(fecha_publicacion) AS post_month, estatus, COUNT(*) AS  categoriass_quantify 
FROM categoriass
GROUP BY estatus, post_month
HAVING categoriass_quantify >1
ORDER BY post_month;

SELECT  MONTHNAME(fecha_publicacion) AS post_month, estatus, COUNT(*) AS  categoriass_quantify 
FROM categoriass
GROUP BY estatus, post_month
HAVING categoriass_quantify >2
ORDER BY post_month;

CONOCIMIENTO DEL ASC Y DESC ASENDIENTE Y DESCENDIENTE. DEPENDIENDO DEL USO QUE UNO QUIERA.

### Playground: Agrupamiento y Ordenamiento de Datos
### El interminable agujero de conejo (Nested queries)
### ¿Cómo convertir una pregunta en un query SQL?
### Preguntándole a la base de datos
### Consultando PlatziBlog
### Playground: Prueba Final con PlatziBlog

## Introducción a la bases de datos NO relacionales
### ¿Qué son y cuáles son los tipos de bases de datos no relacionales?
### Servicios administrados y jerarquía de datos

## Manejo de modelos de datos en bases de datos no relacionales
### Top level collection con Firebase
### Creando y borrando documentos en Firestore
### Colecciones vs subcolecciones
### Recreando Platziblog
### Construyendo Platziblog en Firestore
### Proyecto final: transformando tu proyecto en una db no relacional

## Bases de datos en la vida real
### Bases de datos en la vida real
### Big Data
### Data warehouse
### Data mining
### ETL
### Business intelligence
### Machine Learning
### Data Science
### ¿Por qué aprender bases de datos hoy?

## Bonus
### Bases de datos relacionales vs no relacionales
### Elegir una base de datos