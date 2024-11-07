const characterContainer = document.getElementById('characterContainer');

async function fetchCharacters() {
    try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const data = await response.json();
        displayCharacters(data.items); // Aqui, usamos 'data.items' para acessar a lista de personagens
    } catch (error) {
        console.error("Erro ao buscar personagens:", error);
    }
}

function displayCharacters(characters) {
    characterContainer.innerHTML = '';
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="${character.name}" width="150">
            <p>Ki: ${character.ki}</p>
            <p>Max Ki: ${character.maxKi}</p>
            <p>Raça: ${character.race}</p>
            <p>Gênero: ${character.gender}</p>
            <p>Afiliação: ${character.affiliation}</p>
        `;
        characterContainer.appendChild(characterDiv);
    });
}

// Chama a função para buscar personagens ao carregar a página
fetchCharacters();
