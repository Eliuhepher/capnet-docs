---
sidebar_position: 2
---

## Reorganize (Reorganización) y Rebuild (Reconstrucción)

## *Reorganize (Reorganización)*

Qué hace: La reorganización de un índice desfragmenta las páginas de datos del índice y compacta el espacio de los registros. Es una operación menos intensiva que la reconstrucción y se realiza en línea, lo que significa que la tabla y el índice permanecen disponibles durante la operación.
> Cuándo usarlo: Se recomienda cuando la fragmentación del índice está entre el 5% y el 30%.

## *Rebuild (Reconstrucción)*
Qué hace: La reconstrucción de un índice crea una nueva copia del índice y luego elimina el índice original. Esto elimina toda la fragmentación y puede cambiar la estructura física del índice. Puede ser una operación intensiva y, por defecto, se realiza fuera de línea, lo que significa que la tabla y el índice no están disponibles durante la operación. Sin embargo, puede realizarse en línea en ediciones de SQL Server que lo soporten.
> Cuándo usarlo: Se recomienda cuando la fragmentación del índice es superior al 30%.


- Orden Recomendado
1. Reorganize: Primero, reorganiza los índices con fragmentación moderada (5% - 30%).
2. Rebuild: Luego, reconstruye los índices con alta fragmentación (más del 30%).


## Script para Reorganizar y Reconstruir Índices

```sql
USE [NombreDeTuBaseDeDatos]; -- Reemplaza con el nombre de tu base de datos

DECLARE @TableName NVARCHAR(128);
DECLARE @IndexName NVARCHAR(128);
DECLARE @SchemaName NVARCHAR(128);
DECLARE @SQL NVARCHAR(MAX);
DECLARE @avg_fragmentation_in_percent FLOAT;

DECLARE IndexCursor CURSOR FOR
SELECT 
    s.name AS SchemaName,
    t.name AS TableName,
    i.name AS IndexName,
    ps.avg_fragmentation_in_percent
FROM 
    sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'DETAILED') AS ps
JOIN 
    sys.indexes AS i ON ps.object_id = i.object_id AND ps.index_id = i.index_id
JOIN 
    sys.tables AS t ON t.object_id = i.object_id
JOIN 
    sys.schemas AS s ON t.schema_id = s.schema_id
WHERE 
    ps.avg_fragmentation_in_percent > 5
ORDER BY 
    ps.avg_fragmentation_in_percent DESC;

OPEN IndexCursor;

FETCH NEXT FROM IndexCursor INTO @SchemaName, @TableName, @IndexName, @avg_fragmentation_in_percent;

WHILE @@FETCH_STATUS = 0
BEGIN
    IF @avg_fragmentation_in_percent > 30
    BEGIN
        SET @SQL = 'ALTER INDEX [' + @IndexName + '] ON [' + @SchemaName + '].[' + @TableName + '] REBUILD;';
    END
    ELSE
    BEGIN
        SET @SQL = 'ALTER INDEX [' + @IndexName + '] ON [' + @SchemaName + '].[' + @TableName + '] REORGANIZE;';
    END

    EXEC sp_executesql @SQL;

    FETCH NEXT FROM IndexCursor INTO @SchemaName, @TableName, @IndexName, @avg_fragmentation_in_percent;
END

CLOSE IndexCursor;
DEALLOCATE IndexCursor;
sql
```	
## Explicación del Script
- Cursor: Utiliza un cursor para iterar sobre los índices que tienen una fragmentación superior al 5%.
- Condición: Si la fragmentación es superior al 30%, reconstruye el índice. Si está entre el 5% y el 30%, reorganiza el índice.
- Ejecución: Ejecuta el comando adecuado (REBUILD o REORGANIZE) para cada índice.
- Este script te ayudará a mantener la salud de los índices en tu base de datos de SQL Server de manera eficiente.

Realizar acciones de reorganización y reconstrucción de índices en SQL Server tiene varios beneficios importantes para el rendimiento y la eficiencia de la base de datos. Aquí te detallo algunos de los beneficios clave:

## Beneficios de Reorganizar Índices
1. Reducción de la Fragmentación:
La reorganización de índices reduce la fragmentación lógica dentro de las páginas de datos, lo que mejora la eficiencia de las operaciones de lectura y escritura.

2. Mejora del Rendimiento de Consultas:
Al reducir la fragmentación, las consultas pueden ejecutarse más rápidamente porque SQL Server puede leer los datos de manera más eficiente.

3. Operación en Línea:
La reorganización se realiza en línea, lo que significa que la tabla y el índice permanecen disponibles para las operaciones de lectura y escritura durante el proceso. Esto es especialmente útil en entornos de producción donde el tiempo de inactividad debe minimizarse.

4. Compactación del Espacio:
La reorganización también compacta el espacio de los registros, lo que puede liberar espacio en disco y mejorar la utilización del almacenamiento.

## Beneficios de Reconstruir Índices
1. Eliminación Completa de la Fragmentación:
La reconstrucción de índices elimina toda la fragmentación, tanto lógica como física, creando una nueva copia del índice. Esto puede resultar en un rendimiento significativamente mejorado para las consultas.

2. Actualización de Estadísticas:
La reconstrucción de índices actualiza automáticamente las estadísticas del índice, lo que puede mejorar la eficiencia del optimizador de consultas de SQL Server.

4. Reorganización de las Páginas de Datos:
La reconstrucción reorganiza las páginas de datos en un orden secuencial, lo que puede mejorar la eficiencia de las operaciones de lectura secuencial.

3. Posibilidad de Realizarse en Línea (en Ediciones Soportadas):
En ediciones de SQL Server que soportan la reconstrucción en línea, esta operación puede realizarse sin bloquear las operaciones de lectura y escritura, minimizando el impacto en el tiempo de actividad.

## Beneficios Generales
1. Mejora del Rendimiento General del Sistema:
Al mantener los índices en buen estado, se mejora el rendimiento general del sistema, lo que puede resultar en tiempos de respuesta más rápidos para las aplicaciones que dependen de la base de datos.

2. Reducción del Uso de Recursos:
Índices bien mantenidos pueden reducir el uso de CPU y memoria, ya que las operaciones de búsqueda y recuperación de datos se vuelven más eficientes.

3. Optimización del Almacenamiento:
La compactación y reorganización de los índices pueden liberar espacio en disco, optimizando el uso del almacenamiento disponible.

4. Mejora de la Concurrencia:
Operaciones de mantenimiento de índices en línea permiten que las aplicaciones continúen funcionando sin interrupciones, mejorando la concurrencia y la disponibilidad del sistema.

## Conclusión
> Realizar regularmente acciones de reorganización y reconstrucción de índices es una práctica recomendada para mantener la salud y el rendimiento de una base de datos SQL Server. Estas acciones ayudan a reducir la fragmentación, mejorar el rendimiento de las consultas, optimizar el uso de recursos y mantener la disponibilidad del sistema.