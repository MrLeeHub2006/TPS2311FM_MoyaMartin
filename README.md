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


### SELECT
### Playground: SELECT en SQL
### FROM y SQL JOINs
### Utilizando la sentencia FROM
### Playground: FROM y LEFT JOIN en SQL
### WHERE
### Utilizando la sentencia WHERE nulo y no nulo
### Playground: Filtrando Datos con WHERE
### GROUP BY
### ORDER BY y HAVING
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