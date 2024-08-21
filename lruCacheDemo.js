// Importar el módulo LRU Cache
const LRU = require('lru-cache');

// Crear una nueva caché con una capacidad de 3 elementos
const cache = new LRU({ max: 3 });

// Añadir elementos a la caché
cache.set('key1', 'value1');
cache.set('key2', 'value2');
cache.set('key3', 'value3');

// Acceder a un elemento
console.log(cache.get('key1')); // 'value1'

// Añadir un nuevo elemento, lo que causará que el más antiguo se elimine
cache.set('key4', 'value4');

// Verificar que el elemento más antiguo (key2) ha sido eliminado
console.log(cache.get('key2')); // undefined, ya que 2 fue eliminado
