const characterContainer = document.getElementById('characterContainer');

async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        displayCharacters(data.results);
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
            <p>Espécie: ${character.species}</p>
            <p>Status: ${character.status}</p>
        `;
        characterContainer.appendChild(characterDiv);
    });
}

// Chama a função para buscar personagens ao carregar a página
fetchCharacters();
