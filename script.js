function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}


//pesquisa funcional

// Função de pesquisa que filtra o conteúdo com base na entrada do usuário
function searchContent() {
    const query = document.getElementById('search-bar').value.toLowerCase(); // Pega o valor da pesquisa
    const publicacoes = document.querySelectorAll('.instagram-media'); // Seleciona todas as publicações

    // Itera sobre todas as publicações
    publicacoes.forEach(publicacao => {
        // Pega o conteúdo completo do bloco de publicação
        const content = publicacao.innerText.toLowerCase(); // Pega todo o texto visível dentro do bloco

        // Verifica se o conteúdo inclui o termo de pesquisa
        if (content.includes(query)) {
            publicacao.style.display = ''; // Exibe a publicação
        } else {
            publicacao.style.display = 'none'; // Oculta a publicação
        }
    });
}
