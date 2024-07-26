document.addEventListener('DOMContentLoaded', () => {
    const submitKartCodeButton = document.getElementById('submit-kart-code-button');
    const kartCodeInput = document.getElementById('kart-code-input');
    const resultDiv = document.getElementById('result');
    const characterLogo = document.getElementById('character-logo');
    const characterName = document.getElementById('character-name');
    const kartLogo = document.getElementById('kart-logo');
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

    submitKartCodeButton.addEventListener('click', () => {
        const kartCode = kartCodeInput.value.split('-');
        const characterCode = kartCode[1];
        const kartCodePart = kartCode[2];

        if (characters[characterCode] && karts[kartCodePart]) {
            characterLogo.src = `KartSelect/Characters/${characterCode}.png`;
            characterName.textContent = characters[characterCode];
            kartLogo.src = `KartSelect/Karts/${kartCodePart}.png`;
            kartName.textContent = karts[kartCodePart];
            resultDiv.classList.remove('hidden');
        } else {
            alert('Invalid Kart Code. Please try again.');
        }
    });
});
