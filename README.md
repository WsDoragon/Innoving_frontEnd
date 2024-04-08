# Innoving 2030 - Gestion Usuarios

## Descripcion
* Servicio para Login de Funcionarios y Academicos.
* Creacion y edicion de usuarios.
* Deshabilitar usuarios.
* Gestion de permisos.

## Instalacion
* En la terminal dentro de la carpeta raiz introducir ```npm install``` para instalar las dependencias necesarias para utilizar el proyecto.

## Scripts Disponibles

Los siguientes comandos estan disponibles para ejecutar el proyecto.

### `npm start`
- Iniciar proyecto en modo desarrollo

### `npm build`
- Crea la build utilizable para su despliegue

## Pruebas automatizadas
* Especial para realizar pruebas de requisitos funcionales y no funcionales
### Requisitos:
- Python 3.9 >=
- Modulo `selenium` (`pip install selenium`)
- chromedriver (stable) [https://googlechromelabs.github.io/chrome-for-testing/]
- Agregar datos de prueba a la base de datos, en mariaDB importar con `SOURCE Ruta/Hasta/Archivo/INFO290_Testing/testUpdate.sql`

### Ejecucion

- Dentro de la carpeta "INFO290_Testing" ejecutar uno de los siguientes comandos segun necesidad:

#### `python RNF_rendimiento [N° iteraciones]`
- Se ejecutara una prueba de rendimiento con 3 usuarios, contenidos en dataTest.json, en forma paralela
- Esta prueba puede ejecutar la cantidad de iteraciones entregadas de forma simultanea, entregando un tiempo de ejecucion total y un tiempo promedio por cada inicio de sesion que se realiza.

#### `python RF_Login`
- Se ejecutara un login automatizado a la aplicacion para comprobar su funcionalidad con el usuario entregado en dataTest.json

