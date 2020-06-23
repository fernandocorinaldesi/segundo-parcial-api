<a href="http://www.unpaz.edu.ar"><img src="https://www.unpaz.edu.ar/sites/default/files/unpaz_0.png" title="FVCproductions" alt="UNPAZ"></a>

# Empezando con segundo parcial-practica integradora

## Tabla de contenidos
- [Empezando](#Empezando)
  - [Requerimientos](#Requerimientos)
  - [Dependencias](#Dependencias)
  - [Solución](#Solución)
  - [Deploy](#Deploy)
  - [Uso](#Uso)
  - [Contacto](#Contacto)
  - [Licencia](#Licencia)
 

### Empezando
La consigna de este parcial es realizar una api sobre tutoriales con express.js y base de datos postgresql.  
Los tutoriales deberan tener la siguiente estructura :  
{

        "id": 3,

        "Titulo": "Programción 1",

        "Descripcion": "Aprender a Programar",

        "publicado": true,

}

Funciones disponibles:
* Operaciones crud

 
### Requerimientos 

 - Nodejs  (v7 o superior) instalado
 - Postgrsql (v9.4 o superior) instalado

### Dependencias 

 - express
 - body-parser
 - nodemon
 - dotenv
 - pg
 - cors
 

### Solución   
Habiendo consultado diferentes fuentes y documentos, y teniendo en cuenta el diseño presentado en clase, se propone una solución utilizando el siguiente diseño en capas:
![screenshoot](https://i.ibb.co/YfbcRxQ/Express-REST-API-Struc.png)

Main layer     | Type   | Descripcion
--------------------- | -------------------- | ---------------------
HTTP logic layer | Routes + Controllers | Esta capa manejara las peticiones http y las routeara a su correspondiente controllador
Business logic layer | Services + Data Access | Contiene la logica de negocio asi como el acceso a nuestra base de datos, esta fue simplicada un poco teniendo en cuenta el tamaño de la api y el hecho de no usar un orm junto  con un modelo  


Estructura :  
![screenshoot](https://i.ibb.co/yy43Hm0/estructura.jpg)
### Deploy  
[https://segundo-parcial-api.herokuapp.com/api/tutoriales](https://segundo-parcial-api.herokuapp.com/api/tutoriales)

### Uso  

Instalacion de dependencias :  

`npm install`

Para su ejecucion en el directorio del proyecto ejecutar :  

`npm start`

### Contacto

Puedes enviar un mail a alguna de las siguientes direcciones : 

- fcorinaldesi@unpaz.edu.ar
- fernandocorinaldesi@hotmail.com

### Licencia

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
