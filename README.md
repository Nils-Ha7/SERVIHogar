# SERVIHogar – Landing Page

> Plataforma que conecta familias con trabajadores domésticos verificados en Lima, Perú.

## Estructura del proyecto

```
servihogar/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos (Design System + componentes)
├── js/
│   └── main.js         # Interacciones y lógica de UI
└── README.md
```

---

## 5.1.2 Source Code Management (GitFlow)

Se usa **GitHub** como plataforma de control de versiones con el flujo **GitFlow**.

### Ramas principales
| Rama | Propósito |
|------|-----------|
| `main` | Código en producción (solo merge desde release o hotfix) |
| `develop` | Integración continua de features |

### Ramas de soporte
| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Feature | `feature/<descripcion-corta>` | `feature/hero-section` |
| Release | `release/<semver>` | `release/1.0.0` |
| Hotfix | `hotfix/<descripcion>` | `hotfix/fix-modal-scroll` |

### Semantic Versioning (SemVer 2.0.0)
- `MAJOR.MINOR.PATCH` → e.g. `v1.2.3`
- MAJOR: cambio incompatible
- MINOR: nueva funcionalidad retrocompatible
- PATCH: corrección de errores

### Conventional Commits
```
feat: add professional profile modal
fix: correct mobile nav toggle animation
style: update hero section colors
refactor: extract modal helpers to utils.js
docs: update README with deployment steps
chore: add .gitignore
```

---

## 5.1.3 Source Code Style Guide & Coding Conventions

### HTML
- Elementos en minúsculas, atributos con comillas dobles
- Indentación de 2 espacios
- Uso de atributos semánticos: `aria-label`, `role`, `alt`
- Nomenclatura en inglés para clases e IDs (BEM: `.pro-card__header`)

### CSS
- Variables CSS en `:root` para el Design System
- Nomenclatura BEM: `.block__element--modifier`
- Mobile-first con media queries `max-width`
- Sin `!important` salvo casos excepcionales
- Propiedades en orden: posicionamiento → modelo de caja → tipografía → visual

### JavaScript
- `'use strict'` al inicio
- `const`/`let`, nunca `var`
- Nombres de funciones en camelCase descriptivo
- Funciones de máximo 25 líneas (single-responsibility)
- Comentarios en español cuando es lógica de negocio

### Gherkin (.feature)
```gherkin
Feature: Registro de nuevos usuarios
  Scenario: Registro exitoso
    Given el usuario está en la página de registro
    When completa los campos con datos válidos
    And hace clic en "Registrarse"
    Then el sistema crea la cuenta correctamente
    And muestra mensaje de bienvenida
```

---

## 5.1.4 Software Deployment Configuration

### Despliegue con GitHub Pages

1. Crea un repositorio en GitHub: `servihogar-landing`
2. Sube los archivos:
   ```bash
   git init
   git add .
   git commit -m "feat: initial landing page release v1.0.0"
   git branch -M main
   git remote add origin https://github.com/<usuario>/servihogar-landing.git
   git push -u origin main
   ```
3. En GitHub → **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` → `/ (root)`
   - Guarda y espera ~2 minutos
4. La URL pública será: `https://<usuario>.github.io/servihogar-landing/`

### Variables de entorno
No se requieren variables de entorno (landing estático puro HTML/CSS/JS).

### Checklist pre-deploy
- [ ] Validar HTML con W3C Validator
- [ ] Verificar responsive en 375px, 768px, 1280px
- [ ] Probar modales y formularios
- [ ] Revisar contraste de colores (WCAG AA mínimo)
- [ ] Confirmar que todos los `alt` y `aria-label` están presentes

---

## User Stories implementadas

| ID | Descripción | Sección |
|----|-------------|---------|
| HU01 | Registrar nuevos usuarios | Modal registro |
| HU02 | Iniciar sesión | Modal login |
| HU03 | Recuperar contraseña | Enlace en modal login |
| HU06 | Buscar trabajadores por categoría | Hero search + servicios |
| HU08 | Ver perfiles de trabajadores | Modal perfil profesional |
| HU09 | Revisar calificaciones y comentarios | Tarjetas profesionales |
| HU10 | Guardar trabajadores favoritos | Botón en modal perfil |
| HU11 | Solicitar un servicio | Botón en modal perfil |
| HU16 | Registrar servicios (trabajador) | Sección "Trabaja con nosotros" |
| HU18 | Postular como trabajador | CTA section |

---

## Mejoras UX/UI aplicadas (Nielsen Heuristics)

1. **Visibilidad del estado** – Toast de confirmación en todas las acciones
2. **Concordancia sistema/mundo real** – Lenguaje en español peruano, precios en soles
3. **Control y libertad** – Botón cerrar en todos los modales, tecla Escape
4. **Consistencia** – Design system uniforme, mismo verde #2ECC71 en toda la UI
5. **Prevención de errores** – Validación inline con mensajes descriptivos
6. **Reconocimiento > Recuerdo** – Labels visibles, CTAs descriptivos
7. **Flexibilidad** – Responsive completo mobile/tablet/desktop
8. **Diseño minimalista** – Sin información innecesaria, jerarquía clara
9. **Accesibilidad** – aria-label, roles ARIA, foco visible, reduced motion
