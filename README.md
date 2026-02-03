# Wordpress Web

Este proyecto es una web visual y clara diseñada para explicar a nuevos clientes el uso de WordPress como CMS (Sistema de Gestión de Contenidos) y como LMS (Sistema de Gestión de Aprendizaje).

## Equipo de Trabajo

### Miembros y Roles Agile
- **Oscar** - Scrum Master
- **Eloy** - Product Owner
- **Rubén** - Developer
- **Álvaro** - Developer
- **Jorge** - Developer


## Estructura del Proyecto
```
Web-Visual-sobre-el-uso-de-WordPress/
│
├── index.html      # Archivo HTML principal
├── styles.css      # Estilos CSS personalizados
├── script.js       # Funcionalidades JavaScript
├── README.md       # Este archivo
└── LICENSE         # Licencia del proyecto
```


## Características

### Secciones Principales
1. **Introducción** - Explica qué es WordPress y diferencia entre CMS y LMS
2. **WordPress como CMS** - Detalla características y ventajas como sistema de gestión de contenidos
3. **WordPress como LMS** - Muestra cómo transformarse en plataforma de aprendizaje
4. **Comparación CMS vs LMS** - Tabla comparativa de ambos enfoques
5. **Contacto** - Información de contacto y llamadas a acción

### Tecnologías Utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados con variables CSS
- **Bootstrap 5** - Framework CSS para diseño responsive
- **Bootstrap Icons** - Iconografía consistente
- **JavaScript Vanilla** - Interactividad sin dependencias

### Funcionalidades JavaScript
- Navegación suave entre secciones
- Scrollspy para resaltar sección activa
- Animaciones al hacer scroll
- Modales interactivos para formularios
- Efectos visuales en navbar
- Tooltips informativos
- Diseño responsive y optimizado para móviles

## Flujo de Trabajo con Git

El proyecto sigue un flujo de trabajo colaborativo con Git:

1. **Rama principal (`main`)** - Contiene la versión estable del proyecto
2. **Ramas de desarrollo** - Cada desarrollador crea ramas para nuevas funcionalidades
3. **Pull Requests** - Las nuevas características se revisan antes de fusionarse
4. **Commits descriptivos** - Se utilizan mensajes claros que explican los cambios realizados

### Comandos básicos utilizados:
```bash
git clone <url-repositorio>    # Clonar el repositorio
git checkout -b <rama>          # Crear y cambiar a una nueva rama
git add .                       # Añadir cambios al staging
git commit -m "mensaje"         # Confirmar cambios
git push origin <rama>          # Subir cambios al repositorio remoto
git pull origin main            # Actualizar con los últimos cambios
```

## Cómo Usar

### Instrucciones para Visualizar la Web

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd Web-Visual-sobre-el-uso-de-WordPress
   ```

3. **Abre el archivo en tu navegador:**
   - Opción 1: Haz doble clic en `index.html`
   - Opción 2: Usa un servidor local (recomendado):
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (live-server)
     npx live-server
     ```
   - Luego abre tu navegador en `http://localhost:8000`

4. **No se requieren instalaciones adicionales** - El proyecto funciona directamente en el navegador

## Personalización

### Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #21759b;     /* Color principal (azul WordPress) */
    --accent-color: #ff7e5f;      /* Color de acento (naranja) */
    --secondary-color: #f7f9fc;   /* Color de fondo secundario */
}