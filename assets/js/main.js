document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const menuList = document.getElementById('menu-list');

    // Adiciona um ouvinte de evento de clique ao botão de toggle
    toggleButton.addEventListener('click', function() {
        // Alterna a classe 'active' no botão de toggle para animar o ícone
        toggleButton.classList.toggle('active');
        // Alterna a classe 'active' na lista do menu para mostrar/esconder
        menuList.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um item do menu (útil para Single Page Applications)
    menuList.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            if (menuList.classList.contains('active')) {
                toggleButton.classList.remove('active');
                menuList.classList.remove('active');
            }
        });
    });
});