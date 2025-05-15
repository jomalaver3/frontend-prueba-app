# FrontendPruebaApp

Proyecto frontend desarrollado en **Angular** para la gestión de estudiantes, materias, inscripciones y compañeros de clase. Utiliza Angular Material para una interfaz moderna y responsiva, y JWT para autenticación y autorización basada en roles.

---

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Autenticación y Autorización](#autenticación-y-autorización)
- [Uso de Angular Material](#uso-de-angular-material)
- [Buenas Prácticas](#buenas-prácticas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Características

- Login con autenticación JWT.
- Gestión de estudiantes, materias, inscripciones y compañeros.
- Interfaz moderna y responsiva con Angular Material.
- Formularios reactivos y validaciones en tiempo real.
- Autorización basada en roles (por ejemplo, solo estudiantes pueden inscribirse a materias).
- Feedback visual con snackbars y spinners.
- Código modular y escalable.

---

## Tecnologías

- [Angular CLI](https://angular.io/cli) v19.2.11
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/) para autenticación
- [Karma](https://karma-runner.github.io) para testing

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/jomalaver3/frontend-prueba-app.git
   cd FrontendPruebaApp
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Instala Angular Material (si no está instalado):**
   ```bash
   ng add @angular/material
   ```

---

## Ejecución

- **Servidor de desarrollo:**
  ```bash
  ng serve
  ```
  Luego abre [http://localhost:4200/](http://localhost:4200/) en tu navegador.

- **Build para producción:**
  ```bash
  ng build --configuration production
  ```

- **Ejecutar tests unitarios:**
  ```bash
  ng test
  ```

- **Ejecutar tests end-to-end:**
  ```bash
  ng e2e
  ```
  Nota: Angular CLI no incluye un framework de testing e2e por defecto. Deberás elegir uno que se adapte a tus necesidades.

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── auth/                # Módulo de autenticación (login)
│   ├── core/                # Servicios y utilidades globales
│   ├── features/
│   │   ├── estudiantes/     # Gestión de estudiantes
│   │   ├── materias/        # Gestión de materias
│   │   ├── inscripciones/   # Inscripción de materias
│   │   └── companeros/      # Compañeros de clase
│   ├── layout/              # Componentes de layout y navegación
│   └── app.module.ts        # Módulo principal
├── assets/
├── environments/
└── styles.scss
```

---

## Autenticación y Autorización

- El sistema utiliza **JWT** para autenticación.
- Al iniciar sesión, el backend devuelve un token JWT que incluye el rol del usuario (por ejemplo, `"role": "Estudiante"`).
- El frontend envía este token en cada request usando un interceptor.
- El backend protege rutas con `[Authorize(Policy = "Estudiante")]` para asegurar que solo los estudiantes puedan acceder a ciertas funcionalidades.
- El frontend puede decodificar el JWT para mostrar/ocultar elementos según el rol.

---

## Uso de Angular Material

- Todos los formularios y listados utilizan componentes de Angular Material (`mat-card`, `mat-form-field`, `mat-checkbox`, `mat-table`, etc.).
- El diseño es responsivo y moderno.
- Se recomienda personalizar los estilos en `styles.scss` o en los archivos SCSS de cada componente.

---

## Buenas Prácticas

- Usa **ReactiveFormsModule** para formularios reactivos y validaciones.
- Mantén los servicios en el directorio `core/services` para lógica de negocio y acceso a APIs.
- Declara los componentes en sus respectivos módulos y organiza el código por features.
- Usa el sistema de rutas de Angular para navegación.
- Aplica feedback visual (snackbars, spinners) para mejorar la experiencia de usuario.

---

## Contribuciones

¡Las contribuciones son bienvenidas!  
Por favor, abre un issue o un pull request para sugerencias o mejoras.

---

## Licencia

Este proyecto está bajo la licencia MIT.

---

## Recursos Adicionales

Para más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
