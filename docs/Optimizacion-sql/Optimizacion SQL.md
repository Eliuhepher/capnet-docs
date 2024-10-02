---
sidebar_position: 1
---
# Optimizacion de SQL
Para generar un script de SQL Server que obtenga el estado de salud de todos los índices de todas las tablas de una base de datos, puedes usar las vistas de administración dinámica (DMVs) proporcionadas por SQL Server. Aquí tienes un script que te ayudará a obtener esta información:

```sql
USE [NombreDeTuBaseDeDatos]; -- Reemplaza con el nombre de tu base de datos

SELECT 
    DB_NAME() AS DatabaseName,
    OBJECT_NAME(i.object_id) AS TableName,
    i.name AS IndexName,
    i.type_desc AS IndexType,
    ps.index_id,
    ps.index_type_desc,
    ps.avg_fragmentation_in_percent,
    ps.page_count,
    ps.record_count,
    ps.avg_page_space_used_in_percent,
    ps.avg_record_size_in_bytes,
    ps.forwarded_record_count
FROM 
    sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'DETAILED') AS ps
JOIN 
    sys.indexes AS i ON ps.object_id = i.object_id AND ps.index_id = i.index_id
ORDER BY 
    ps.avg_fragmentation_in_percent DESC;
```
**Explicación del Script**
```sql
1. USE [NombreDeTuBaseDeDatos]: Cambia [NombreDeTuBaseDeDatos] por el nombre de la base de datos que deseas analizar.
2. sys.dm_db_index_physical_stats: Esta vista de administración dinámica devuelve información sobre la fragmentación y otros aspectos físicos de los índices.
3. sys.indexes: Esta vista contiene información sobre los índices definidos en la base de datos.
4. JOIN: Unimos las dos vistas en los campos object_id e index_id para obtener información detallada sobre cada índice.
5. ORDER BY ps.avg_fragmentation_in_percent DESC: Ordenamos los resultados por el porcentaje de fragmentación promedio en orden descendente, para que los índices más fragmentados aparezcan primero.
```
**Campos Devueltos**
```sql
- DatabaseName: Nombre de la base de datos.
- TableName: Nombre de la tabla.
- IndexName: Nombre del índice.
- IndexType: Tipo de índice (CLUSTERED, NONCLUSTERED, etc.).
- index_id: ID del índice.
- index_type_desc: Descripción del tipo de índice.
- avg_fragmentation_in_percent: Porcentaje de fragmentación promedio.
- page_count: Número de páginas en el índice.
- record_count: Número de registros en el índice.
- avg_page_space_used_in_percent: Porcentaje promedio de espacio utilizado en las páginas.
- avg_record_size_in_bytes: Tamaño promedio de los registros en bytes.
- forwarded_record_count: Número de registros reenviados (aplicable solo a tablas con índices no agrupados).
```
>*Ejecuta este script en SQL Server Management Studio (SSMS) para obtener el estado de salud de todos los índices en la base de datos especificada.*

## Estado de salud

En el contexto de la salud de los índices en SQL Server, los "parámetros normales" generalmente se refieren a los valores esperados o aceptables para ciertos campos que indican un buen estado de los índices. Aquí hay una breve descripción de los valores normales para algunos de los campos devueltos:

```sql
avg_fragmentation_in_percent:
```
1. Normal: Menos del 5%.
2. Moderado: Entre 5% y 30%.
3. Alto: Más del 30%.
> **Acción recomendada:**
> 1. Menos del 5%: No se requiere acción.
> 2. Entre 5% y 30%: Considera reorganizar el índice.
> 3. Más del 30%: Considera reconstruir el índice.

```sql
page_count:
```
- Normal: Depende del tamaño de la tabla y del índice.
> **Acción recomendada:** Índices con muy pocas páginas (menos de 1000) pueden no necesitar optimización frecuente.

```sql
record_count:
```
- Normal: Depende del tamaño de la tabla y del índice.
> **Acción recomendada:** No hay una acción específica basada solo en el recuento de registros, pero es útil para entender el tamaño del índice.


```sql
avg_page_space_used_in_percent:
```
Normal: 75% o más.
> **Acción recomendada:** Si el porcentaje es significativamente menor, puede indicar espacio desperdiciado y fragmentación.

```sql
avg_record_size_in_bytes:
```
Normal: Depende del esquema de la tabla.
> **Acción recomendada:** No hay una acción específica basada solo en el tamaño promedio de los registros, pero es útil para entender la eficiencia del almacenamiento.
```sql
forwarded_record_count:
```	
Normal: 0.
> **Acción recomendada:** Si hay registros reenviados, puede indicar problemas de fragmentación en tablas con índices no agrupados. Considera reorganizar o reconstruir el índice.


## Ejemplo de Interpretación
Supongamos que obtienes los siguientes resultados para un índice:

```sql
avg_fragmentation_in_percent: 35%
page_count: 1500
record_count: 10000
avg_page_space_used_in_percent: 60%
avg_record_size_in_bytes: 100
forwarded_record_count: 0
```
En este caso:

1. La fragmentación es alta (35%), por lo que deberías considerar reconstruir el índice.
2. El número de páginas (1500) y el recuento de registros (10000) son razonables y no indican problemas por sí mismos.
3. El espacio utilizado en las páginas es bajo (60%), lo que puede ser un indicativo de fragmentación.
4. No hay registros reenviados, lo cual es bueno.
> **Acción Recomendada:**
> Para este índice, la acción recomendada sería reconstruir el índice para reducir la fragmentación y mejorar el uso del espacio en las páginas.

Estos "parámetros normales" pueden variar según el contexto y las necesidades específicas de tu base de datos, pero estos valores proporcionan una guía general para evaluar la salud de los índices.