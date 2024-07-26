document.addEventListener('DOMContentLoaded', () => {
    const characterCodeInput = document.getElementById('character-code-input');
    const submitCharacterCodeButton = document.getElementById('submit-character-code');
    const goToGameButton = document.getElementById('go-to-game');
    const characterImage = document.getElementById('character-image');
    const characterName = document.getElementById('character-name');
    const kartImage = document.getElementById('kart-image');
    const kartName = document.getElementById('kart-name');

    // Character and Kart mappings
    const characters = {
        'MA': 'Mario',
        'LU': 'Luigi',
        'PE': 'Peach',
        'DA': 'Daisy',
        'RO': 'Rosalina',
        'YO': 'Yoshi',
        'TO': 'Toad',
        'KT': 'Koopa Troopa',
        'BM': 'Baby Mario',
        'BL': 'Baby Luigi',
        'BP': 'Baby Peach',
        'BD': 'Baby Daisy',
        'BR': 'Baby Rosalina',
        'WA': 'Wario',
        'WL': 'Waluigi',
        'BO': 'Bowser',
        'DK': 'Donkey Kong'
    };

    const karts = {
        'SK': 'Standard Kart',
        'PF': 'Pipe Frame',
        'M8': 'Mach 8',
        'SD': 'Steel Driver',
        'GSK': 'Gold Standard Kart',
        'KCK': 'Koopa Clown Kart',
        'SB': 'Standard Bike',
        'TD': 'The Duke',
        'CT': 'City Tripper'
    };

    const characterImages = {
        'Mario': 'KartSelect/Characters/MA.png',
        'Luigi': 'KartSelect/Characters/LU.png',
        // Add other character images here
    };

    const kartImages = {
        'Standard Kart': 'KartSelect/Karts/SK.png',
        'Pipe Frame': 'KartSelect/Karts/PF.png',
        // Add other kart images here
    };

    submitCharacterCodeButton.addEventListener('click', () => {
        const code = characterCodeInput.value.toUpperCase();
        const [characterCode, kartCode] = code.split('-');
        const character = characters[characterCode];
        const kart = karts[kartCode];

        if (character && kart) {
            characterImage.src = characterImages[character];
            characterName.textContent = character;
            kartImage.src = kartImages[kart];
            kartName.textContent = kart;

            // Show the "Go to Game" button
            goToGameButton.classList.remove('hidden');
        } else {
            alert('Invalid code. Please try again.');
        }
    });

    goToGameButton.addEventListener('click', () => {
        const code = characterCodeInput.value.toUpperCase();
        const [characterCode, kartCode] = code.split('-');
        const kartParam = kartCode || ''; // Use kartCode for URL
        // Redirect to game.html with the Kart Code in the URL
        window.location.href = `/game/game.html?kart=${kartParam}`;
    });
});
