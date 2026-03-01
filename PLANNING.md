# Planificación del Proyecto GymNext

## Estimación vs Tiempo Real

| Módulo                        | Estimación Inicial | Tiempo Real |
| ----------------------------- | ------------------ | ----------- |
| Configuración inicial y setup | 30 min             | 25 min      |
| Componentes base (UI Kit)     | 1 h                | 1 h         |
| Dashboard principal           | 1 h                | 30 min      |
| Salas                         | 1 h                | 1:15 h      |
| Incidencias                   | 1 h                | 1:30 h      |
| Órdenes de Trabajo            | 1 h                | 1:40 h      |
| Gestión de Usuarios           | 45 min             | 50 min      |
| Planes y Suscripciones        | 45 min             | 35 min      |
| Documentacion final           | 30 min             | 30 min      |
| **TOTAL**                     | **7 horas**        | **8 horas** |

## Justificación de la Estructura

### Organización de Archivos

**App Router (src/app/)**

```
app/
├── page.tsx              # Dashboard - punto de entrada principal
├── salas/               # Módulo de salas
├── incidencias/         # Sistema de incidencias
├── ordenes/            # Órdenes de trabajo
├── planes/             # Gestión de planes
└── usuarios/           # Administración
```

**Razones de esta estructura**:

- Cada carpeta representa un módulo específico
- Se aprovechó el sistema de rutas basado en archivos
- Permite agregar fácilmente nuevos módulos sin afectar código existente

**Componentes Reutilizables (src/components/)**

```
components/
├── Badge.tsx           # Estados y etiquetas
├── Button.tsx          # Acciones primarias
├── Card.tsx           # Contenedores de información
├── Modal.tsx          # Interacciones complejas
├── Input.tsx          # Formularios
└── ...
```

**Justificación de la separación de componentes**

La separación de componentes se implementó para optimizar la mantenibilidad y consistencia del código. Durante el desarrollo inicial, se identificó que reutilizar elementos de UI sin una estructura definida generaba inconsistencias visuales y duplicación de código.

Esta arquitectura permite modificar estilos y comportamientos desde un punto central, reduciendo significativamente el tiempo de desarrollo y mantenimiento.

**Tipos y Datos (src/types/ y src/mocks/)**

- **types/**: Centralización de interfaces para garantizar consistencia en el tipado a lo largo del proyecto
- **mocks/**: Datos de desarrollo que permiten trabajar independientemente del backend durante el proceso de desarrollo

### Decisiones Arquitectónicas Fundamentales

1. **React Hooks**: Patrón moderno que facilita el manejo de estado y efectos, mejorando la legibilidad del código
2. **Tailwind CSS**: Framework de utilidades que acelera el desarrollo UI
3. **TypeScript**: Prevención proactiva de errores en tiempo de desarrollo, reduciendo bugs en producción
