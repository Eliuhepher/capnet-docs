## Bitacora de cambios

Click para direccionarte ala bitacora: [Bitacora De Cambios](https://docs.google.com/spreadsheets/d/1Dj99OaqM6XlAyUV9bQSdwFfCeizriLRpJy-U9jT79WM/edit?usp=sharing)

Este archivo de Excel se utiliza para gestionar y dar seguimiento a los cambios realizados en proyectos de desarrollo, así como para organizar las asignaciones pendientes dentro del equipo. Contiene 2 hojas principales:

## 1. Hoja: Cambios.

Esta hoja sirve como una bitácora donde se registran modificaciones en el software. Incluye las siguientes columnas:
```md
- Proyecto: Nombre del proyecto donde se realizó el cambio.
- Responsable: Persona encargada de realizar el ajuste.
- Tipo: Clasificación del cambio (ejemplo: Fix, Mejora, Nueva Funcionalidad).
- Incidencia: Número de la incidencia.
- Fecha: Fecha en la que se realizó la modificación.
- Número de Versión: Indica la versión del código afectado.
- Puntos que resuelve esta actualización: Descripción detallada del problema solucionado o mejora implementada.
- ¿Se realizó cambio de base de datos?: Indica si hubo modificaciones en la base de datos (Sí/No).
- Cambios en la base de datos: Especifica los ajustes realizados en la estructura de la base de datos (si aplica).
- Archivos del código que cambiaron: Lista de archivos modificados durante la actualización.
- Actualización aprobada: Confirmación de que el cambio fue validado.
- Enlace al último commit del repositorio: URL del cambio en el sistema de control de versiones (ejemplo: GitHub, GitLab).
```
## 2. Hoja: Asignaciones pendientes

Esta sección organiza las tareas y pendientes asignados a distintos integrantes del equipo. Contiene los siguientes campos:
```md
- Subject (Responsable): Nombre de la persona asignada.
- Assignment (Tarea): Descripción de la actividad a realizar.
- Formato Solicitud Req: Campo adicional para referenciar requerimientos o solicitudes.
- Status: Estado actual de la tarea (ejemplo: Not started, In Progress, Completed).
- Time (Tiempo estimado): Duración aproximada para completar la tarea.
- Start date (Fecha de inicio): Fecha en que comienza la actividad.
- Due on (Fecha límite): Fecha en la que se espera que la tarea esté finalizada.
```