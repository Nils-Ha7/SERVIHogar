# SERVIHogar – Landing Page

> Plataforma móvil que conecta a familias y empresas con trabajadores de servicios domésticos verificados (limpieza, gasfitería, electricidad, jardinería, mantenimiento) en Lima, Perú.

---

## Índice

- [Sobre el proyecto](#sobre-el-proyecto)
- [Startup](#startup)
- [Integrantes del equipo](#integrantes-del-equipo)
- [Segmentos objetivo](#segmentos-objetivo)
- [Principales características](#principales-características)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Gestión del código fuente](#gestión-del-código-fuente)
- [Despliegue](#despliegue)
- [Historias de usuario implementadas](#historias-de-usuario-implementadas-en-el-landing-page)

---

## Sobre el proyecto

**SERVIHogar** es una solución digital desarrollada por la startup **ServiFy** como respuesta a una problemática real en Lima Metropolitana: la dificultad para conectar, de manera rápida y segura, a familias que necesitan servicios domésticos con trabajadores independientes calificados.

Actualmente, este proceso se realiza de forma informal (recomendaciones, redes sociales, anuncios en la calle), lo que genera desconfianza, demoras y falta de garantías tanto para clientes como para trabajadores. SERVIHogar centraliza este proceso en una aplicación móvil intuitiva, donde los trabajadores crean perfiles verificados con su experiencia, disponibilidad y precios, y los clientes pueden buscar, comparar y contratar servicios de forma transparente y confiable.

### Misión

Brindar una aplicación móvil segura y fácil de usar que conecte a trabajadores de servicios domésticos con familias y clientes, genere oportunidades laborales y facilite la contratación de servicios confiables.

### Visión

Ser la aplicación móvil líder en búsqueda y contratación de servicios domésticos en el Perú, reconocida por su innovación y por visibilizar un segmento laboral poco atendido digitalmente.

---

## Startup

| Campo | Detalle |
|-------|---------|
| **Nombre del startup** | ServiFy |
| **Producto** | SERVIHogar |
| **Universidad** | Universidad Peruana de Ciencias Aplicadas (UPC) |
| **Facultad** | Ingeniería de Sistemas de Información |
| **Curso** | IHC y Tecnologías Móviles (1ASI0385) |
| **Sección** | 4812 |
| **Docente** | Gutiérrez Gutiérrez, Alan Tito |
| **Ciclo académico** | 202610 |

---

## Integrantes del equipo

| Apellidos y Nombres | Código | Acerca del integrante |
|---------------------|--------|-----------------------|
| Achulla Canales, Fabian Mathias | U202416292 | Estudiante de ISI, proactivo y orientado a la resolución de problemas con gran capacidad de aprendizaje. |
| Castillo Durand, Jorge Luis | U20241F270 | Estudiante de ISI (4.° ciclo), responsable y con perfil de liderazgo, enfocado en el trabajo colaborativo y en asumir retos que aporten a su formación. |
| Huamantinco Auccapuclla, Nils | U20241F809 | Estudiante de ISI (4.° ciclo), responsable, creativo y con buenas habilidades para el trabajo en equipo. |
| Quispe Cuchama, Nicolas Walter | U20241C087 | Estudiante de ISI (5.° ciclo), puntual y con habilidades para el trabajo en equipo, interesado en desarrollar proyectos propios aplicando sus conocimientos. |
| Zegarra Berrospi, Valentin Noe | U20241F716 | Estudiante de ISI, proactivo, con iniciativa y comprometido con la mejora continua; disfruta potenciar las capacidades del equipo. |

---

## Segmentos objetivo

SERVIHogar atiende a tres segmentos claramente identificados a través de entrevistas y análisis de needfinding:

### Segmento 1 – Familias que requieren servicios domésticos y técnicos

Adultos de 23 a 55 años, de nivel socioeconómico medio y medio-bajo, residentes en Lima Metropolitana. Buscan contratar servicios del hogar (limpieza, gasfitería, electricidad, etc.) de forma rápida, segura y con precios transparentes. Sienten desconfianza al permitir el ingreso de desconocidos al hogar y valoran las reseñas verificadas de otros usuarios.

### Segmento 2 – Trabajadores domésticos y técnicos independientes

Adultos de 18 a 60 años, de nivel socioeconómico bajo y medio-bajo, que ofrecen servicios de manera informal (limpieza, gasfitería, electricidad, pintura, jardinería, entre otros). Enfrentan dificultades para conseguir trabajos fuera de su círculo cercano, ingresos variables e inseguridad en el cumplimiento de pagos. Buscan una plataforma que les otorgue visibilidad, reputación digital y acceso a más oportunidades laborales.

### Segmento 3 – Administradores de microempresas de trabajadores domésticos

Adultos de 25 a 60 años que gestionan pequeñas empresas o asociaciones de técnicos (electricistas, gasfiteros, pintores), concentrados en distritos con alta densidad comercial y residencial (Surco, Miraflores, San Borja, Los Olivos, entre otros). Buscan centralizar la búsqueda de técnicos, gestionar presupuestos de forma transparente y recibir atención rápida ante emergencias operativas.

---

## Principales características

SERVIHogar ofrece las siguientes funcionalidades organizadas por épicas:

### Gestión de usuarios
- Registro e inicio de sesión seguro
- Recuperación y modificación de contraseña
- Edición y eliminación de perfil

### Búsqueda de trabajadores
- Búsqueda por categoría de servicio (limpieza, gasfitería, electricidad, etc.)
- Filtro por ubicación y disponibilidad
- Visualización de perfiles detallados con experiencia, precios y fotos
- Revisión de calificaciones y comentarios de otros usuarios
- Guardado de trabajadores favoritos

### Contratación de servicios
- Solicitud de servicio desde la app
- Coordinación de fecha y horario
- Confirmación y cancelación de contratación
- Historial de servicios contratados

### Administración para trabajadores
- Registro de servicios ofrecidos y precios
- Gestión de disponibilidad
- Aceptación y rechazo de solicitudes de trabajo
- Visualización de historial laboral

### Comunicación y seguridad
- Chat integrado entre cliente y trabajador
- Notificaciones automáticas de recordatorio y estado del servicio
- Verificación de identidad y sistema de valoraciones

### Pagos
- Sistema de pagos digitales seguros dentro de la plataforma
- Registro de transacciones y comprobantes

---

## Estructura del proyecto

```
servihogar/
├── index.html        # Página principal del Landing Page
├── css/
│   └── styles.css    # Estilos del sitio (variables, componentes, responsive)
├── js/
│   └── main.js       # Interacciones: navbar, sliders, modales, buscador, etc.
└── assets/           # Imágenes y recursos multimedia
```

---

## Gestión del código fuente

El control de versiones se maneja en GitHub sobre una sola rama, **main**, que contiene siempre la versión estable del Landing Page. Los mensajes de commit siguen el formato de **Conventional Commits**:

| Prefijo | Uso |
|---------|-----|
| `feat:` | Nueva sección o funcionalidad |
| `fix:` | Corrección de errores |
| `style:` | Ajustes visuales sin cambios de lógica |
| `docs:` | Cambios en documentación |

---

## Despliegue

El sitio se publica mediante **GitHub Pages**, desplegando directamente desde la rama `main` (carpeta raíz). Cualquier cambio subido a `main` actualiza automáticamente el sitio publicado.

---

## Historias de usuario implementadas en el Landing Page

| ID | Descripción | Sección |
|----|-------------|---------|
| HU01 | Registrar nuevos usuarios | Modal de registro |
| HU02 | Iniciar sesión | Modal de login |
| HU06 | Buscar trabajadores por categoría | Buscador (navbar) + sección de profesionales |
| HU08 | Ver perfiles de trabajadores | Modal de perfil profesional |
| HU11 | Solicitar un servicio | Botón en modal de perfil |

---

## Registro de versiones

| Versión | Fecha | Descripción |
|---------|-------|-------------|
| 1.0 | 20/04/2026 | Introducción, Capítulo 1 y Capítulo 2 |
| 2.0 | 10/05/2026 | Capítulo 3 y Capítulo 4 |
| 3.0 | 15/06/2026 | Capítulo 4, Capítulo 5 y Capítulo 6 |
