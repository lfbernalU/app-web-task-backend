# Proyecto App Web Task Backend

Este documento describe los pasos para instalar y configurar el proyecto.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)
- Base de datos compatible (por ejemplo, MySQL, PostgreSQL, etc.)

## Instalación

1. **Clonar el repositorio**  
    ```bash
    git clone https://github.com/lfbernalU/app-web-task-backend.git
    cd app-web-task-backend
    ```

2. **Instalar dependencias**  
    ```bash
    npm install
    ```

3. **Configurar variables de entorno**  
    Crea un archivo `.env` basado en `.env.example`:
    ```bash
    cp .env.example .env
    ```

4. **Configurar la base de datos**  
    Asegúrate de que tu base de datos esté configurada y actualiza las credenciales en `.env`.

5. **Ejecutar migraciones**  
    ```bash
    npm run migrate
    ```

6. **Iniciar el servidor**  
    ```bash
    npm run dev
    ```

    El servidor estará disponible en `http://localhost:3000`.

## Scripts disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run start`: Inicia el servidor en modo producción.
- `npm run test`: Ejecuta las pruebas.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
