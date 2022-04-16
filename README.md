# Datos

| Carnet | 202100119|
| ------ | ------ |
| Estudiante |Samuel Isaí Muñoz Pererira|
| Auxiliar | Hector Josue Orozco Salazar|


# Frontend
Algunas de las tecnologias utilizadas para la implementacion del frontend son:

- **CSS:** fue utilizada para poder generar un estilo y mejoras visuales al la pagina html.
- **HTML:** fue la base para la construccion de la pagina, desde las barras de navegacion, tablas, imagenes, etc.
- **Font Awesome:** libreria de iconos que permitio personalizar un poco mas la pagina.
- **Bootstrap:** fue una tecnologia utilizada para mejorar la interaccion en la pagina, de manera que fuera mucho mas funcional, vistosa, y responsiva.


## Manual de Uso
#


### *Levantar el servidor NodeJS*
Para levantar el servidor es necesario correr el siguiente codigo:
```sh
npm dev run
```
pora este programa el puerto de salida del servidor es el 8000.

#
#

### *Recorrido en la pagina*
en la barra de navegacion estan presentes las siguientes opciones:
- Inicio
- Login
- About


#### **Inicio**
en este apartado se encuentra la bienvenida a la pagina junto con informacion general de la misma, hasta abajo se encuentra la seccion de copyright y enlaces respectivos.
![Pagina de Incio](/Capturas/PagInicio.png)


#### **Login**
En este apartado puede introducir el nombre de usuario y la contraseña correspondiente para ingresar a la pagina de la Pokedex, una vez introducido los datos es necesario darle clic en el boton de **Ingresar**. Cabe resaltar que la pagina de la Pokedex no se encuentra en la barra de navegacion, unicamente se puede acceder a esta pagina realizando el login con datos correctos.
![Pagina de Login](/Capturas/PagLogin.png)

#
Si los datos son correctos la pagina mostrara un mensaje avisando que el ingreso ha sido exitos, y saludando al usuario que ingresó.
![Saludo Login](/Capturas/LoginCorrecto.png)

#
En caso que los datos no sean correctos, la pagina mostrara una alerta informado sobre el error de las credenciales
![Alerta Login](/Capturas/LoginIncorrecto.png)

##### **Salir**
Esta opcion es unicamente para dejar la pagina de la Pokedex en casa que se desee cambiar de usuario, lo que lo redireccionara automaticamente a la pagina del Login


#### **About**
Esta pagina es unicamente de tipo informativo, expresando la importancia y dedicacion que se tuvo en la contruccion de dicha Pagina.
![Pagina de Incio](/Capturas/About.png)

