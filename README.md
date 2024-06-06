# Solución YA-TP2-21D - Parcial - 1° Cuatrimestre de 2024

Este repositorio contiene el proyecto realizado en pos de solucionar las siguientes consignas:

1. Definir una ruta que inserte en el servidor (post)
calificaciones. El formato será “nombre” y “nota” y el ingreso
de los datos será JSON.
Por ejemplo: {“nombre”: “Diego Ruiz”, nota: 10}.
2. Cada inserción debe tener un identificador único autogenerado
por el propio servidor (id).
3. Definir una ruta que obtenga (get) el total de la información
añadida al servidor, es decir, cada estudiante con su nota.
4. Definir una ruta que obtenga (get) un estudiante con su nota
dado un parámetro “id”. Esta consulta deberá retornar solo la
información asociada al id de ese estudiante (nombre y nota).
5. Opcional: transformar la respuesta de la consulta anterior en
un mensaje customizado (puede ser JSON o string) con la
información de cada estudiante.
Ejemplo: “¡Hola Diego Ruiz! Tu nota es 10”.
6. La persistencia de datos es la propia memoria

## Pasos a seguir para ejecutar el proyecto

1- clonar el repositorio

2- correr el comando `npm install` para bajar las dependencias

3- ejecutar el projecto con `npm run dev`

3- consumir los endpoints

## Persistencia de datos
Para la persistencia de datos se eligió utilizar la propia memoria del servidor.

## Asincronismo
Dado que el metodo de persistencia del proyecto es la propia memoria del servidor, no se ejecuta ninguna operacion I/O o alguna acción que requiera devolver una promesa o ser asincrona. Por lo que todas las funciones del proyecto son sincronas

## Validaciones
El proyecto contiene validaciones para el body de la request del endpoint de crear calificacion/estudiantes

## Endpoints
El proyecto contiene los siguientes endpoints:

POST /calificaciones returns 200/400

GET /calificaciones returns 200

GET /calificaciones returns 200/404

