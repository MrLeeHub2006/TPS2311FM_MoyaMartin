/*LEFT*/
SELECT *
FROM  usuarios
	LEFT JOIN categoriass ON usuarios.id = categoriass.usuario_id;

/*LEFT CON WHERE*/
SELECT *
FROM usuarios
	LEFT JOIN  categoriass ON usuarios.id = categoriass.usuario_id WHERE categoriass.id IS NULL;
/*RIGHT*/
SELECT *
FROM usuarios
	RIGHT JOIN  categoriass ON usuarios.id = categoriass.usuario_id 
WHERE categoriass.usuario_id IS NULL;

/*iNNER*/
SELECT *
FROM usuarios
	INNER JOIN  categoriass ON usuarios.id = categoriass.usuario_id ;
 /*/INNER*/   
    
/*use UNION*/
SELECT *
FROM  usuarios
	LEFT JOIN categoriass ON usuarios.id = categoriass.usuario_id
    WHERE categoriass.usuario_id IS NULL
UNION 


SELECT *
FROM usuarios
	RIGHT JOIN  categoriass ON usuarios.id = categoriass.usuario_id 
    WHERE categoriass.usuario_id IS NULL;

