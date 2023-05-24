// Dados iniciais
const items = [...]; // Array com os itens a serem exibidos
const itemsPerPage = 10; // Número de itens por página
const container = document.getElementById('pagination-container'); // Elemento HTML para exibir a página atual e os controles de navegação

// Função para exibir os itens da página atual
function displayPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage; // Índice inicial dos itens da página
  const endIndex = startIndex + itemsPerPage; // Índice final dos itens da página
  const currentPageItems = items.slice(startIndex, endIndex); // Obter os itens da página atual

  // Limpar o conteúdo anterior
  container.innerHTML = '';

  // Exibir os itens da página atual
  currentPageItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = item;
    container.appendChild(itemElement);
  });

  // Exibir os controles de navegação
  const totalPages = Math.ceil(items.length / itemsPerPage); // Número total de páginas
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    // Adicionar um event listener para chamar a função displayPage quando o botão for clicado
    pageButton.addEventListener('click', () => displayPage(i));
    container.appendChild(pageButton);
  }
}

// Inicializar a paginação
displayPage(1); // Exibir a primeira página quando a página carregar
