// Código JavaScript para interactuar con la página
document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor');
    const itemInput = document.getElementById('item');
    const agregarButton = document.getElementById('agregar');
    const limpiarButton = document.getElementById('limpiar');

    // Cargar ítems almacenados al cargar la página
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    updateItemList(storedItems);

    // Agregar ítem al listado y actualizar vista
    agregarButton.addEventListener('click', function () {
      const newItem = itemInput.value.trim();
      if (newItem !== '') {
        storedItems.push(newItem);
        localStorage.setItem('items', JSON.stringify(storedItems));
        updateItemList(storedItems);
        itemInput.value = '';
      }
    });

    // Limpiar listado y actualizar vista
    limpiarButton.addEventListener('click', function () {
      localStorage.removeItem('items');
      updateItemList([]);
    });

    // Función para actualizar la vista del listado
    function updateItemList(items) {
      contenedor.innerHTML = '';
      items.forEach(function (item) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        contenedor.appendChild(li);
      });
    }
  });