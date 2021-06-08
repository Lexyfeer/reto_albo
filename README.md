# De que va está aplicación
Es un sitio que muestra noticias sobre cuestiones del espectáculo que tienen que ver series, películas o programas de TV; si se quiere ver la noticia completa tiene un enlace a la pagina con la noticia y además puedes agregar comentarios u opiniones sobre las noticias que se están publicando.
# Instrucciiones para utilizar esta aplicación

1. Copiar link para clonar el repositorio.
2. Abrir la terminal y clonar el repositorio en la carpeta deseada mediante el comando `git clone (link copiado del repositorio)`.
3. Abrir el proyecto en tu editor de código.
4. Mediante la terminal entrar a la carpeta del repositorio que acabas de clonar.
5. Asegurate de estar en la branch main/master y ejecutar el codigo `npm start` ó `yarn start`.
6. Listo se abrirá el proyecto en localhost.

O también puedes ver este proyecto en el siguiente Link desplegado en github pages [https://lexyfeer.github.io/reto_albo/](https://lexyfeer.github.io/reto_albo/).

# Arquitectura del sitio
Este sitio esta desarrollado con React JS, utilizando Redux para el manejo de estado, axios para hacer la petición a la API de rapidAPI, react-bootstrap y css y para la parte de responsive se utilizo flexbox.

El sitio tiene una carpeta principal llamada 'src' que contiene las siguientes carpetas:
- 'components' : (tiene todos los componentes que se usan dentro de la aplicación).
- 'redux' : (contiene la carpeta actions, reducers y la store) que se necesitan para el manejo de estados dentro de nuestra webApp.

![image](https://user-images.githubusercontent.com/47005949/121105987-c0fc1800-c7ca-11eb-96f0-b34fc49c0b25.png)

Tenemos un archivo principal que es el de index.js es el que provee nuestro componente App (que contiene toda nuestra aplicación), que a su vez tiene dentro 2 componentes AllFilms y AllPosts dentro de AllPosts se muestra el componente PostForm y Post.
  * AllFilms: Realiza una llamada get a la API para mostrar todas las películas mediante el componente (Film.js) 
  * AllPost: Muestra todos los posts que el usuario haga y un formulario para cargar mas comentarios (PostForm.js)
  * PostForm: Contiene un formulario simple para capturar titulo y un comentario a realizar.
  * Post: Muestra los datos que se hayan capturado en PostForm formateados con CSS y react-bootstrap.


