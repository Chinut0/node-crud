El proyecto incluye:

- Entorno de Docker con imagenes de node y mongo.
- Estructura de Node basica (controllers, models, middlewares, routes, database, helpers, public).
- Modelos de server, usuario y rol.
- CRUD de usuario.
- Login con JWT.

- Google identity: https://developers.google.com/identity/gsi/web/guides/overview

- Seeder for user, rol. Execute command ./run_seeder.sh in console outside container.

- CRUD de products and category.
- Route to search /api/buscar/:cotroller/:term

- File system for img of products and users

//Para trabajar en en dev.
Levantar el contenedor corriendo el run dev que usa NODEMON.
Docker-compose -> Puerto '80:${PORT}' para localhost.
Usar docker logs -f CONTAINER para ver los logs en tiempo real
Correr seeders.

//Pendientes
Meter los directorios de la app en src para separarlo de las config, variables de entorno, etc.
Averiguar si es mejor agregar o no los .model.js entre otros para identificar mas rapido el arhcivo.
