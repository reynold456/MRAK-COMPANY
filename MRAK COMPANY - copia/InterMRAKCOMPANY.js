document.addEventListener('DOMContentLoaded', function() {
    // Mostrar productos
    const productsLink = document.getElementById('products-link');
    if (productsLink) {
        productsLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.Contenedor').forEach(function(sec) {
                sec.style.display = 'none';
            });
            document.getElementById('productos-section').style.display = 'block';
        });
    }

    // Volver a Home/About Us
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('productos-section').style.display = 'none';
            document.querySelectorAll('.Contenedor').forEach(function(sec) {
                sec.style.display = 'block';
            });
        });
    }
});