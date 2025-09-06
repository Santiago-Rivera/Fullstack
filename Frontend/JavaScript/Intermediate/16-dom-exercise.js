// 1. Crea un elemento h1 y cambia su contenido
document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = '¡Hola Mundo!';
    document.body.appendChild(title);
});

// 2. Inserta una imagen y cambia su src
document.addEventListener('DOMContentLoaded', () => {
    const image = document.createElement('img');
    image.id = 'myImage';
    image.src = 'https://via.placeholder.com/150';
    image.alt = 'Imagen de ejemplo';
    document.body.appendChild(image);
    
    // Cambiar src después de 2 segundos
    setTimeout(() => {
        image.src = 'https://via.placeholder.com/300';
    }, 2000);
});

// 3. Crea un div y agrega una clase
document.addEventListener('DOMContentLoaded', () => {
    const box = document.createElement('div');
    box.id = 'box';
    box.textContent = 'Este es un div con clase resaltado';
    document.body.appendChild(box);
    
    // Agregar clase
    box.classList.add('resaltado');
});

// 4. Crea un párrafo y cambia su color
document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    paragraph.textContent = 'Este párrafo es azul';
    paragraph.style.color = 'blue';
    document.body.appendChild(paragraph);
});

// 5. Agrega elementos a una lista
document.addEventListener('DOMContentLoaded', () => {
    // Crear la lista
    const list = document.createElement('ul');
    list.id = 'list';
    document.body.appendChild(list);
    
    // Crear el botón
    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar elemento';
    document.body.appendChild(addButton);
    
    // Agregar evento al botón
    addButton.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = 'Nuevo elemento';
        list.appendChild(li);
    });
});

// 6. Eliminar un elemento del DOM
document.addEventListener('DOMContentLoaded', () => {
    // Crear párrafo
    const deleteParagraph = document.createElement('p');
    deleteParagraph.id = 'deleteParagraph';
    deleteParagraph.textContent = 'Este párrafo será eliminado';
    document.body.appendChild(deleteParagraph);
    
    // Crear botón
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar párrafo';
    document.body.appendChild(deleteButton);
    
    // Agregar evento
    deleteButton.addEventListener('click', () => {
        deleteParagraph.remove();
    });
});

// 7. Reemplazar contenido
document.addEventListener('DOMContentLoaded', () => {
    const content = document.createElement('div');
    content.id = 'content';
    content.textContent = 'Contenido original';
    document.body.appendChild(content);
    
    // Reemplazar contenido después de 2 segundos
    setTimeout(() => {
        const newHeading = document.createElement('h2');
        newHeading.textContent = 'Nuevo Contenido';
        content.innerHTML = '';
        content.appendChild(newHeading);
    }, 2000);
});

// 8. Botón con alerta
document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.createElement('button');
    greetBtn.id = 'greetBtn';
    greetBtn.textContent = 'Saludar';
    document.body.appendChild(greetBtn);
    
    greetBtn.addEventListener('click', () => {
        alert('¡Hola!');
    });
});

// 9. Input con actualización en tiempo real
document.addEventListener('DOMContentLoaded', () => {
    // Crear input
    const textInput = document.createElement('input');
    textInput.id = 'textInput';
    textInput.type = 'text';
    textInput.placeholder = 'Escribe algo...';
    document.body.appendChild(textInput);
    
    // Crear div para resultado
    const result = document.createElement('div');
    result.id = 'result';
    document.body.appendChild(result);
    
    // Agregar evento
    textInput.addEventListener('input', (e) => {
        result.textContent = e.target.value;
    });
});

// 10. Cambiar color de fondo
document.addEventListener('DOMContentLoaded', () => {
    const backgroundBtn = document.createElement('button');
    backgroundBtn.id = 'backgroundBtn';
    backgroundBtn.textContent = 'Cambiar fondo';
    document.body.appendChild(backgroundBtn);
    
    const colors = ['#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C'];
    let colorIndex = 0;
    
    backgroundBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});