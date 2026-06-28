# SERVIHogar – Landing Page

Plataforma digital que conecta a familias y empresas con trabajadores de servicios domésticos y técnicos verificados (limpieza, cocina, jardinería, gasfitería, electricidad, pintura).

---

## Información del Proyecto

**Curso:** IHC y Tecnologías Móviles (1ASI0385)  
**Sección:** 4812  
**Docente:** Gutiérrez Gutiérrez, Alan Tito  
**Universidad:** Universidad Peruana de Ciencias Aplicadas (UPC)  
**Ciclo:** 2026-10  

---

## Autores

| Apellidos y Nombres | Código |
|---|---|
| Achulla Canales, Fabian Mathias | U202416292 |
| Castillo Durand, Jorge Luis | U20241F270 |
| Huamantinco Auccapuclla, Nils | U20241F809 |
| Quispe Cuchama, Nicolas Walter | U20241C087 |
| Zegarra Berrospi, Valentin Noe | U20241F716 |

---

## Descripción de la Startup

**ServiFy** es la startup detrás de **SERVIHogar**, una aplicación móvil que conecta a personas que necesitan servicios domésticos rápidos y seguros con trabajadores independientes. El objetivo es facilitar la contratación de manera confiable desde cualquier lugar.

### Misión
Brindar una aplicación móvil segura y fácil de usar que conecte a trabajadores de servicios domésticos con familias como clientes, generar oportunidades laborales y facilitar la contratación de servicios confiables.

### Visión
Ser la aplicación móvil líder en la búsqueda y contratación de servicios, iniciando con el ámbito doméstico como fase inicial, reconocida por su innovación y por visibilizar un segmento laboral poco atendido.

---

## Segmentos Objetivo

### Segmento 1: Familias que requieren servicios domésticos y técnicos
- **Edades:** Adultos de 23 a 55 años (jefes de familia o personas independientes)
- **Nivel socioeconómico:** Medio, medio-bajo y bajo
- **Zona geográfica:** Lima Metropolitana
- **Necesidad:** Encontrar trabajadores calificados de manera rápida, segura y con precios transparentes

### Segmento 2: Trabajadores domésticos y técnicos independientes
- **Edades:** Adultos de 18 a 60 años
- **Nivel socioeconómico:** Bajo y medio-bajo
- **Zona geográfica:** Zonas urbanas y periurbanas de Lima
- **Necesidad:** Profesionalizar su oficio y contar con una plataforma que les brinde visibilidad constante ante nuevos clientes

### Segmento 3: Administradores de microempresas de servicios domésticos
- **Edades:** Adultos de 25 a 60 años
- **Ocupación:** Administradores de edificios, gestores de mantenimiento, dueños de locales comerciales
- **Zona geográfica:** Lima Metropolitana (Surco, Miraflores, San Borja)
- **Necesidad:** Centralizar la búsqueda de técnicos calificados para mantenimiento preventivo y correctivo

---

## Principales Características de la Solución Digital

- **Búsqueda por categoría:** Los usuarios pueden buscar servicios por tipo (limpieza, gasfitería, electricidad, jardinería, cocina, pintura)
- **Perfiles verificados:** Los trabajadores cuentan con perfiles con información de experiencia, precios, ubicación y disponibilidad
- **Sistema de valoraciones:** Los usuarios pueden ver reseñas y calificaciones de otros clientes para elegir al profesional más adecuado
- **Registro e inicio de sesión:** Sistema de autenticación para usuarios y trabajadores
- **Modal de perfil profesional:** Vista detallada del perfil de cada trabajador con opción de solicitar servicio
- **Diseño responsive:** Adaptado para dispositivos móviles, tablets y escritorio

---

## Estructura del Proyecto

```
SERVIHogar/
├── README.md
├── favicon.ico
└── public/
    ├── index.html
    └── assets/
        ├── styles/
        │   └── styles.css
        ├── images/
        │   └── (imágenes del sitio)
        └── scripts/
            └── main.js
```

---

## Gestión del Código Fuente

El control de versiones se maneja en GitHub siguiendo el proceso **GitFlow**:

- **Rama `main`:** versión estable y productiva del Landing Page
- **Rama `develop`:** rama de integración para nuevas funcionalidades
- **Ramas `feature/`:** ramas creadas a partir de `develop` para cada nueva funcionalidad

Los mensajes de commit siguen el formato de **Conventional Commits**:

- `feat:` nueva sección o funcionalidad
- `fix:` corrección de errores
- `style:` ajustes visuales sin cambios de lógica
- `docs:` cambios en documentación

---

## Despliegue

El sitio se publica mediante **GitHub Pages**, desplegando directamente desde la rama `main`. Cualquier cambio subido a `main` actualiza automáticamente el sitio publicado.

**URL del sitio:** [landing-page-servihogar.github.io/SERVIHogar](https://landing-page-servihogar.github.io/SERVIHogar)

---

## Historias de Usuario Implementadas

| ID | Descripción | Sección |
|----|-------------|---------|
| HU01 | Registrar nuevos usuarios | Modal de registro |
| HU02 | Iniciar sesión | Modal de login |
| HU06 | Buscar trabajadores por categoría | Buscador (navbar) + sección de profesionales |
| HU08 | Ver perfiles de trabajadores | Modal de perfil profesional |
| HU11 | Solicitar un servicio | Botón en modal de perfil |

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts
- Font Awesome
- jQuery
