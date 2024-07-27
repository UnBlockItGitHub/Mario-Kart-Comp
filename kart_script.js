document.addEventListener('DOMContentLoaded', () => {
    const characterCodeInput = document.getElementById('character-code-input');
    const submitCharacterCodeButton = document.getElementById('submit-character-code');
    const goToGameButton = document.getElementById('go-to-game');
    const characterImage = document.getElementById('character-image');
    const characterName = document.getElementById('character-name');
    const kartImage = document.getElementById('kart-image');
    const kartName = document.getElementById('kart-name');

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
        'Mario': 'KartSelect/Characters/Mario.png',
        'Luigi': 'KartSelect/Characters/Luigi.png',
        'Peach': 'KartSelect/Characters/Peach.png',
        'Daisy': 'KartSelect/Characters/Daisy.png',
        'Rosalina': 'KartSelect/Characters/Rosalina.png',
        'Yoshi': 'KartSelect/Characters/Yoshi.png',
        'Toad': 'KartSelect/Characters/Toad.png',
        'Koopa Troopa': 'KartSelect/Characters/Koopa Troopa.png',
        'Baby Mario': 'KartSelect/Characters/Baby Mario.png',
        'Baby Luigi': 'KartSelect/Characters/Baby Luigi.png',
        'Baby Peach': 'KartSelect/Characters/Baby Peach.png',
        'Baby Daisy': 'KartSelect/Characters/Baby Daisy.png',
        'Baby Rosalina': 'KartSelect/Characters/Baby Rosalina.png',
        'Wario': 'KartSelect/Characters/Wario.png',
        'Waluigi': 'KartSelect/Characters/Waluigi.png',
        'Bowser': 'KartSelect/Characters/Bowser.png',
        'Donkey Kong': 'KartSelect/Characters/Donkey Kong.png',
    };

    const kartImages = {
        'Standard Kart': 'KartSelect/Karts/Standard Kart.png',
        'Pipe Frame': 'KartSelect/Karts/Pipe Frame.png',
        'Mach 8': 'KartSelect/Karts/Mach 8.png',
        'Steel Driver': 'KartSelect/Karts/Steel Driver.png',
        'Gold Standard Kart': 'KartSelect/Karts/Gold Standard Kart.png',
        'Koopa Clown Kart': 'KartSelect/Karts/Koopa Clown Kart.png',
        'Standard Bike': 'KartSelect/Karts/Standard Bike.png',
        'The Duke': 'KartSelect/Karts/The Duke.png',
        'City Tripper': 'KartSelect/Karts/City Tripper.png',
    };

      submitCharacterCodeButton.addEventListener('click', () => {
        const name = nameInput.value;
        const code = characterCodeInput.value.toUpperCase();
        const [characterCode, kartCode] = code.split('-');
        const character = characters[characterCode];
        const kart = karts[kartCode];

        if (name && character && kart) {
            characterImage.src = characterImages[character];
            characterName.textContent = character;
            kartImage.src = kartImages[kart];
            kartName.textContent = kart;

            // Store selected name, character, and kart in local storage
            localStorage.setItem('selectedName', name);
            localStorage.setItem('selectedCharacter', character);
            localStorage.setItem('selectedKart', kart);

            // Show the "Go to Game" button
            goToGameButton.classList.remove('hidden');
        } else {
            alert('Invalid code. Please try again.');
        }
    });

    goToGameButton.addEventListener('click', () => {
        // Redirect to game.html
        window.location.href = 'game.html';
    });
});
