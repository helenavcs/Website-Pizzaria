document.addEventListener('DOMContentLoaded', () => {
  const hamburguer = document.getElementById('hamburguer');
  const menuMobile = document.getElementById('menuMobile');

  hamburguer.addEventListener('click', () => {
    menuMobile.classList.toggle('show');
  });

  const dropdown = document.querySelector('.dropdown');
  const cardapioBotao = dropdown.querySelector('.botaocardapio');

  cardapioBotao.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });
});

// 'função de SPA (Single Page Application)'
function mostrarPagina(idPagina) {
      const paginas = document.querySelectorAll('.pagina');
      paginas.forEach(pagina => {
        pagina.classList.remove('ativo');
      });
      const paginaSelecionada = document.getElementById(idPagina);
      if (paginaSelecionada) {
        paginaSelecionada.classList.add('ativo');
      }
    }
