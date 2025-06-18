// Selecciona todos los elementos con la clase "marco"
const marcos = document.querySelectorAll('.marco');

// Configura el Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agrega la clase cuando el marco es visible
        }
    });
}, {
    threshold: 0.2 // El 20% del marco debe ser visible para activar la animación
});

// Observa cada marco
marcos.forEach(marco => {
    observer.observe(marco);
});