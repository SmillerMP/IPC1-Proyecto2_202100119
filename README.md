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


#### **Pokedex**
En esta Pagina se podra buscar los Pokemons presentes en el *Inventario*, se muestra El Numero, Nombre, Tipo, 1 Ataque e Imagen del Pokemon. Entre las opciones de busqueda estan las siguientes opciones:

- **Todos:** muestra todos los Pokemons presentes
- **Por Numero:** permite localizar al Pokemon por su numero
- **Por Nombre:** permite localizar al Pokemon por su nombre unico
- **Por Tipo:** permite localizar a todos los Pokemons presentes, de un mismo tipo.

En caso que necesite realizar la busqueda por Numero, Nombre y Tipo, es necesario intrudicir la informacion correspondiente

![Pagina de Incio](/Capturas/PokedexTodos.png)


En caso que no se encuente ningun pokemon con el dato especificado, la pagina mostrara una alerta detallando el error, y de inmediato borrara cualquier tipo de Pokemon presente en la tabla.
![Pagina de Incio](/Capturas/PokedexError.png)

#
#

# Backend

## Modulos Utilizados
- **Nodemon:** la funcion de este paquete es reiniciar el servido NodeJS cada vez que se realice un cambio, de esta forma no es necesario realizar el reinicio de manera manual,
- **Morgan:**  Es una gran herramienta que registra las requests de cada una de las opereacion realizadas.
- **Express:** es un Framework web que proporciona mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
- **Cors:** es un mecanismo para permitir o restringir los recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP. 


## Requerimientos del Sistema
- Contar con **NodeJS** instalado en el sistema, se utilizo la version **16.14.2**

## Endpoints
- **/Login:** es de tipo *POST* y su funcion es resicibir los datos de Login, (Usuario y Contraseña), verifica si los datos son correctos o no concuerdan y devuelve un resultado para cada posible situacion.

- **/NombreUser:** es te tipo *GET* y su unica funcion es enviar un archivo JSON temporal donde se almacena el nombre del usuario que ingreso a la Pokedex, de manera que cuando se inicia en la Pokedex se pueda mostrar el nombre del usuario ingresado.

- **/BusquedaPokemons:** es de tipo *POST*, es el que recibe que tipo de busqueda se va a realizar en la pokedex, de modo que filtra los Pokemons presentes en el archivo JSON, de volviendo asi cada uno de los datos del Pokemon respectivo a la busqueda. Tambien se contempla los posibles busqueda por lo que se devuelve su respectivo codigo de error
